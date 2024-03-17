export interface CustomUrl {
  url: string;
  is_customized: boolean;
}

export interface Image {
  id: number;
  product_id: number;
  is_thumbnail: boolean;
  sort_order: number;
  description: string;
  image_file: string;
  url_zoom: string;
  url_standard: string;
  url_thumbnail: string;
  url_tiny: string;
  date_modified: string;
}

interface MetaPagination {
  total: number;
  count: number;
  per_page: number;
  current_page: number;
  total_pages: number;
  links: MetaLinks;
}

export interface MetaLinks {
  previous: string;
  current: string;
  next: string;
}

export interface Meta {
  pagination: MetaPagination;
}

export interface CatalogResponse<T> {
  data: T;
  meta: Meta | object;
}
