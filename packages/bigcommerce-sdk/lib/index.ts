export interface BigCommerceOptions {
  clientId: string;
  projectId: string;
  accessToken: string;
}

export class BigCommerceSDK {
  private options: BigCommerceOptions;
  constructor(options: BigCommerceOptions) {
    this.options = options;
    console.log(this.options);
  }
}
