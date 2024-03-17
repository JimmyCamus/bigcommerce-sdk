import { Module } from '@nestjs/common';
import { ProductsController } from './controllers/products.controller';
import { ProductsService } from './services/products.service';
import { AppConfigModule } from '../../config/config.module';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [AppConfigModule],
})
export class ProductsModule {}
