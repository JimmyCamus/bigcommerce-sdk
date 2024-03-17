import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { BigCommerceOptions } from 'bigcommercesdk';

@Injectable()
export class AppConfigService {
  constructor(private readonly configService: ConfigService) {}

  get bigcommerceConfiguration(): BigCommerceOptions {
    const clientId = this.configService.get<string>('CLIENT_ID');
    const authToken = this.configService.get<string>('AUTH_TOKEN');
    const storeHash = this.configService.get<string>('STORE_HASH');

    return { clientId, authToken, storeHash };
  }
}
