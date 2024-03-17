// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const queryToString = (params: any): string => {
  let queryString = "";

  for (const key in params) {
    const queryValue = params[key];

    if (queryValue !== undefined) {
      queryString += `${key}=${encodeURIComponent(queryValue.toString())}&`;
    }
  }

  return queryString;
};
