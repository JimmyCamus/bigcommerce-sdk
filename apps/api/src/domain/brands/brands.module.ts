import { Module } from '@nestjs/common';
import { BrandsController } from './controllers/brands.controller';
import { BrandsService } from './services/brands.service';
import { AppConfigModule } from '../../config/config.module';

@Module({
  controllers: [BrandsController],
  providers: [BrandsService],
  imports: [AppConfigModule],
})
export class BrandsModule {}
