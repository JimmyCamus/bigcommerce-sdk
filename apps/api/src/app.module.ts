import { Module } from '@nestjs/common';
import { ProductsModule } from './domain/products/products.module';
import { AppConfigModule } from './config/config.module';

@Module({
  imports: [ProductsModule, AppConfigModule],
})
export class AppModule {}
