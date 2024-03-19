import { GetProductsQueryParams, Product } from ".";
import { CatalogResponse } from "..";
import { fetcher } from "../utils";
import { queryToString } from "../utils/query-to-string";
import { PRODUCT_PREFIX } from "./constants";

interface GetProducsEntries {
  storeHash: string;
  authToken: string;
  params?: GetProductsQueryParams;
}

export const handleGetProducts = async (
  entries: GetProducsEntries
): Promise<CatalogResponse<Product[]>> => {
  const { params, storeHash, authToken } = entries;

  const queryString = queryToString(params);

  const res = await fetcher({
    path: `${PRODUCT_PREFIX}?${queryString}`,
    storeHash,
    options: {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Auth-Token": authToken,
      },
    },
  });

  const products: CatalogResponse<Product[]> = await res.json();

  if (res.status === 404) {
    return;
  }

  return products;
};
