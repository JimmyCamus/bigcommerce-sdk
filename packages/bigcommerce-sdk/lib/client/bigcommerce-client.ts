import {
  Brand,
  CatalogResponse,
  CreateProductBody,
  GetProductsQueryParams,
  Product,
  handleGetBrandById,
  handleGetProductById,
} from "..";
import { handleCreateProduct } from "../products/create-product";
import { handleGetProducts } from "../products/get-products";

export interface BigCommerceOptions {
  clientId: string;
  storeHash: string;
  authToken: string;
}

export class BigCommerceSDK {
  private options: BigCommerceOptions;
  constructor(options: BigCommerceOptions) {
    this.options = options;
  }

  async getProductById(productId: string): Promise<CatalogResponse<Product>> {
    const product = await handleGetProductById({
      authToken: this.options.authToken,
      storeHash: this.options.storeHash,
      productId,
    });

    return product;
  }

  async getProducts(
    params?: GetProductsQueryParams
  ): Promise<CatalogResponse<Product[]>> {
    const products = await handleGetProducts({
      authToken: this.options.authToken,
      storeHash: this.options.storeHash,
      params,
    });

    return products;
  }

  async createProduct(
    productData: CreateProductBody
  ): Promise<CatalogResponse<Product>> {
    const product = await handleCreateProduct({
      authToken: this.options.authToken,
      storeHash: this.options.storeHash,
      productData,
    });

    return product;
  }

  async getBrandById(brandId: string): Promise<CatalogResponse<Brand>> {
    const brand = await handleGetBrandById({
      authToken: this.options.authToken,
      storeHash: this.options.storeHash,
      brandId,
    });

    return brand;
  }
}
