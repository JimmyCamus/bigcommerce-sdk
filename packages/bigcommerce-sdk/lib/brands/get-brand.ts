import { CatalogResponse } from "..";
import { fetcher } from "../utils";
import { BRAND_PREFIX } from "./constants";
import { Brand } from "./types";

interface GetBrandById {
  brandId: string;
  storeHash: string;
  authToken: string;
}

export const handleGetBrandById = async (entries: GetBrandById) => {
  const { brandId, storeHash, authToken } = entries;

  const res = await fetcher({
    path: `${BRAND_PREFIX}/${brandId}`,
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

  const brand: CatalogResponse<Brand> = await res.json();

  return brand;
};
