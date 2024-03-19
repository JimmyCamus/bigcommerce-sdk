interface FetcherEntries {
  storeHash: string;
  path: string;
  options: {
    headers: HeadersInit;
    method: string;
    body?: BodyInit;
  };
}

export const fetcher = (entries: FetcherEntries) => {
  const { storeHash, path, options } = entries;
  const url = `https://api.bigcommerce.com/stores/${storeHash}/v3/catalog/${path}`;

  return fetch(url, options);
};
