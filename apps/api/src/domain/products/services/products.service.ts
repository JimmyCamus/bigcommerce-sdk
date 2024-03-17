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
    this.bigcommerce = new BigCommerceSDK(
      configService.bigcommerceConfiguration,
    );
  }

  async getProducts() {
    this.logger.warn(`Trying get products`);

    let products: CatalogResponse<Product[]>;

    try {
      products = await this.bigcommerce.getProducts({ include: ['variants'] });
    } catch (error: unknown) {
      this.logger.error(error);
      throw new InternalServerErrorException('Something went wrong');
    }

    this.logger.log(`Request successfully resolved`);

    return products;
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
