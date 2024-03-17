import { handleGetProductById } from "..";

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

  async getProductById(productId: string) {
    const product = await handleGetProductById({
      authToken: this.options.authToken,
      storeHash: this.options.storeHash,
      productId,
    });

    return product;
  }
}
