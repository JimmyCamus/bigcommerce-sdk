import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { AppConfigService } from '../../../config/config.service';
import { BigCommerceSDK, Brand, CatalogResponse } from 'bigcommercesdk';

@Injectable()
export class BrandsService {
  private bigcommerce: BigCommerceSDK;
  private readonly logger = new Logger(BrandsService.name);

  constructor(private readonly configService: AppConfigService) {
    this.bigcommerce = new BigCommerceSDK(
      configService.bigcommerceConfiguration,
    );
  }

  async getBrandById(id: string): Promise<CatalogResponse<Brand>> {
    let brand: CatalogResponse<Brand>;

    try {
      brand = await this.bigcommerce.getBrandById(id);
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException('Something went wrong');
    }

    if (!brand) {
      const errorMsg = `There is not a brand with id ${id}`;

      this.logger.error(errorMsg);
      throw new NotFoundException(errorMsg);
    }

    this.logger.log(`Request successfully resolved`);

    return brand;
  }
}
