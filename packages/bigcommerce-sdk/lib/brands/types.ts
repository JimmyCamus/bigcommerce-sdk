import { CustomUrl } from "..";

export interface Brand {
  id: number;
  name: string;
  meta_keywords: string[];
  meta_description: string;
  image_url: string;
  search_keywords: string;
  custom_url: CustomUrl;
}

export interface GetBrandsParams {
  id?: number;
  "id:in"?: number[];
  "id:not_in"?: number[];
  name?: string;
  "name:like"?: string;
  page_title?: string;
  page?: number;
  limit?: number;
  include_fields?: string;
  exclude_fields?: string;
  sort?: "name";
}
