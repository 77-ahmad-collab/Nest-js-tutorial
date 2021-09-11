import { Delete, Get, Param } from '@nestjs/common';
import { Body, Controller, Post } from '@nestjs/common';
import { ProductService } from './Products.Service';

@Controller('products')
export class ProductsController {
  constructor(private readonly ProductService: ProductService) {}

  @Post()
  async addProduct(
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('price') price: number,
  ) {
    const id = new Date().toString();
    const product = await this.ProductService.insertProducts(
      id,
      title,
      description,
      price,
    );
    console.log(product, 'The product');
    return { product: product };
  }
  @Get()
  async getAllProducts() {
    return await this.ProductService.getProductList();
  }
  @Delete(':id')
  async deleteProduct(@Param('id') id) {
    return await this.ProductService.deletePro(id);
  }
}
