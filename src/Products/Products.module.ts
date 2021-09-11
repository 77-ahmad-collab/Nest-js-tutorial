import { Module } from '@nestjs/common';
import { ProductsController } from './Products.Controller';
import { ProductService } from './Products.Service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './Products.model';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Products', schema: ProductSchema }]),
  ],
  controllers: [ProductsController],
  providers: [ProductService],
})
export class ProductModule {}
