import { Image, CustomUrl } from "../common/types";

export interface GetProductsQueryParams {
  id?: number;
  "id:in"?: number[];
  "id:not_in"?: number[];
  "id:min"?: number;
  "id:max"?: number;
  "id:greater"?: number;
  "id:less"?: number;
  name?: string;
  mpn?: string;
  upc?: string;
  price?: number;
  weight?: number;
  condition?: "new" | "used" | "refurbished";
  brand_id?: number;
  date_modified?: string;
  "date_modified:max"?: string;
  "date_modified:min"?: string;
  date_last_imported?: string;
  "date_last_imported:not"?: string;
  "date_last_imported:max"?: string;
  "date_last_imported:min"?: string;
  is_visible?: boolean;
  is_featured?: 0 | 1;
  is_free_shipping?: 0 | 1;
  inventory_level?: number;
  "inventory_level:in"?: number;
  "inventory_level:not_in"?: number;
  "inventory_level:min"?: number;
  "inventory_level:max"?: number;
  "inventory_level:greater"?: number;
  "inventory_level:less"?: number;
  inventory_low?: 0 | 1;
  out_of_stock?: 0 | 1;
  total_sold?: number;
  type?: "digital" | "physical";
  categories?: number;
  keyword?: string;
  keyword_context?: "shopper" | "merchant";
  status?: number;
  include?: string[];
  include_fields?: string;
  exclude_fields?: string;
  availability?: "available" | "disabled" | "preorder";
  page?: number;
  limit?: number;
  direction?: "asc" | "desc";
  sort?:
    | "id"
    | "name"
    | "sku"
    | "price"
    | "date_modified"
    | "date_last_imported"
    | "inventory_level"
    | "is_visible"
    | "total_sold";
  "categories:in"?: number[];
  sku?: string;
  "sku:in"?: string[];
}

export interface VariantOptionValue {
  id: number;
  label: string;
  option_id: number;
  option_display_name: string;
}

export interface Variant {
  id: string;
  product_id: number;
  sku: string;
  sku_id: number;
  price: number | null;
  calculated_price: number;
  sale_price: number | null;
  retail_price: number | null;
  map_price: unknown | null;
  weight: number | null;
  calculated_weight: number;
  width: number | null;
  height: number | null;
  depth: number | null;
  is_free_shipping: boolean;
  fixed_cost_shipping_price: number | null;
  purchasing_disabled: boolean;
  purchasing_disabled_message: string;
  image_url?: string;
  cost_price: number;
  upc: string;
  mpn: string;
  gtin: string;
  inventory_level: number;
  inventory_warning_level: number;
  bin_picking_number: string;
  option_values?: VariantOptionValue[];
}

export interface Product {
  id: string;
  name: string;
  type: string;
  sku: string;
  description: string;
  weight: number;
  width: number;
  depth: number;
  height: number;
  price: number;
  cost_price: number;
  retail_price: number;
  sale_price: number;
  map_price: number;
  tax_class_id: number;
  product_tax_code: string;
  calculated_price: number;
  categories: number[];
  brand_id: number;
  option_set_id: number;
  option_set_display: string;
  inventory_level: number;
  inventory_warning_level: number;
  inventory_tracking: string;
  reviews_rating_sum: number;
  reviews_count: number;
  total_sold: number;
  fixed_cost_shipping_price: number;
  is_free_shipping: boolean;
  is_visible: boolean;
  is_featured: boolean;
  related_products: number[];
  warranty: string;
  bin_picking_number: string;
  layout_file: string;
  upc: string;
  mpn: string;
  gtin: string;
  date_last_imported: unknown;
  search_keywords: string;
  availability: string;
  availability_description: string;
  gift_wrapping_options_type: string;
  gift_wrapping_options_list: unknown[];
  sort_order: number;
  condition: string;
  is_condition_shown: boolean;
  order_quantity_minimum: number;
  order_quantity_maximum: number;
  page_title: string;
  meta_keywords: unknown[];
  meta_description: string;
  date_created: string;
  date_modified: string;
  view_count: number;
  preorder_message: string;
  is_preorder_only: boolean;
  is_price_hidden: boolean;
  price_hidden_label: string;
  custom_url: CustomUrl;
  base_variant_id: number | null;
  open_graph_type: string;
  open_graph_title: string;
  open_graph_description: string;
  open_graph_use_meta_description: boolean;
  open_graph_use_product_name: boolean;
  open_graph_use_image: boolean;
  variants?: Variant[];
  images?: Image[];
}
