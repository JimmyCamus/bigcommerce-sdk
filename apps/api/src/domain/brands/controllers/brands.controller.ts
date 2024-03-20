import { Controller, Get, Param } from '@nestjs/common';
import { BrandsService } from '../services/brands.service';

@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Get()
  getBrands() {
    return this.brandsService.getBrands();
  }

  @Get(':id')
  getBrand(@Param('id') id: string) {
    return this.brandsService.getBrandById(id);
  }
}
