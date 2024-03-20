import { CatalogResponse } from "..";
import { fetcher } from "../utils";
import { queryToString } from "../utils/query-to-string";
import { BRAND_PREFIX } from "./constants";
import { Brand, GetBrandsParams } from "./types";

interface GetBrands {
  storeHash: string;
  authToken: string;
  params?: GetBrandsParams;
}

export const handleGetBrands = async (
  entries: GetBrands
): Promise<CatalogResponse<Brand[]>> => {
  const { params, storeHash, authToken } = entries;

  const stringParams = queryToString(params);
  const res = await fetcher({
    path: `${BRAND_PREFIX}?${stringParams}`,
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

  const brands: CatalogResponse<Brand[]> = await res.json();

  return brands;
};
