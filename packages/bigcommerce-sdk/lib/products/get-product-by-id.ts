import { CatalogResponse } from "../common/types";
import { fetcher } from "../utils";
import { PRODUCT_PREFIX } from "./constants";
import { Product } from "./types";

interface GetProductByIdEntries {
  productId: string | number;
  storeHash: string;
  authToken: string;
}

export const handleGetProductById = async (
  entries: GetProductByIdEntries
): Promise<CatalogResponse<Product>> => {
  const { productId, storeHash, authToken } = entries;

  const res = await fetcher({
    path: `${PRODUCT_PREFIX}/${productId}`,
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

  const product: CatalogResponse<Product> = await res.json();

  if (res.status === 404) {
    return;
  }

  return product;
};
