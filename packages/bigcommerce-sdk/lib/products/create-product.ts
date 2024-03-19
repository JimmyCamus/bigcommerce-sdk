import { CreateProductBody } from ".";
import { fetcher } from "../utils";

interface CreateProductEntries {
  productData: CreateProductBody;
  storeHash: string;
  authToken: string;
}

export const handleCreateProduct = async (entries: CreateProductEntries) => {
  const { productData, storeHash, authToken } = entries;

  const res = await fetcher({
    path: `products`,
    storeHash,
    options: {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Auth-Token": authToken,
      },
      body: JSON.stringify(productData),
    },
  });

  const product = await res.json();

  return product;
};
