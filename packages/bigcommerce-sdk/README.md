# [WIP] UnOfficial Bigcommerce SDK

This project is an sdk of the bigcommerce api, which seeks to abstract the complexity of setting up http requests.

## Features

### Features for v0.1.0

- [x] Products
  - [x] Get All products
  - [x] Get product by id
  - [x] Create product
- [x] Brands
  - [x] Get All brands
  - [x] Get brand by id
- [ ] Categories
- [ ] Product modifiers
- [ ] Product variants
- [ ] Product varitns options

## Install

```sh
npm install bigcommercesdk
```

## Setup

```ts
import { BigCommerceSDK } from 'bigcommercesdk';

const bigCommerceClient = new BigCommerceSDK({
    clientId: 'yourClientId',
    authToken: 'yourAuthToken',
    storeHash: 'yourStoreHash',
});
```

## Example

### [See all examples in the main repo](https://github.com/JimmyCamus/bigcommerce-sdk)

### With Nestjs

```ts
import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { BigCommerceSDK, CatalogResponse, Product } from 'bigcommercesdk';
import { AppConfigService } from '../../../config/config.service';

@Injectable()
export class ProductsService {
  private bigcommerce: BigCommerceSDK;
  private readonly logger = new Logger(ProductsService.name);

  constructor(private readonly configService: AppConfigService) {
    this.bigcommerce = new BigCommerceSDK({
      clientId: 'yourClientId',
      authToken: 'yourAuthToken',
      storeHash: 'yourStoreHash',
    });
  }

  async getProductById(id: string) {
    this.logger.warn(`Trying to get a product with id ${id}`);

    let product: CatalogResponse<Product>;

    try {
      product = await this.bigcommerce.getProductById(id);
    } catch (error: unknown) {
      this.logger.error(error);
      throw new InternalServerErrorException('Something went wrong');
    }

    if (!product) {
      const errorMsg = `There is not a product with id ${id}`;

      this.logger.error(errorMsg);
      throw new NotFoundException(errorMsg);
    }

    this.logger.log(`Request successfully resolved`);

    return product;
  }
}
```
