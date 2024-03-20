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
