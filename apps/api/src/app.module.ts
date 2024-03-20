import { Module } from '@nestjs/common';
import { ProductsModule } from './domain/products/products.module';
import { AppConfigModule } from './config/config.module';
import { BrandsModule } from './domain/brands/brands.module';

@Module({
  imports: [ProductsModule, AppConfigModule, BrandsModule],
})
export class AppModule {}
