import { Injectable } from '@nestjs/common';
import { BigCommerceSDK } from 'bigcommercesdk';

@Injectable()
export class AppService {
  getHello(): string {
    new BigCommerceSDK({
      accessToken: 'accessToken',
      clientId: 'clientId',
      projectId: 'projectId',
    });
    return 'Hello World!';
  }
}
