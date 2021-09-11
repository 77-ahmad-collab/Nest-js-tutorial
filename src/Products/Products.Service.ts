import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Products } from './Products.model';

@Injectable()
export class ProductService {
  products: Products[] = [];

  constructor(@InjectModel('Products') private ProductModel: Model<Products>) {}

  async insertProducts(
    id: string,
    name: string,
    description: string,
    price: number,
  ) {
    // const prodid = new Date().toString();
    const newproduct = new this.ProductModel({
      name: name,
      description: description,
      price,
    });
    const result = await newproduct.save();
    return result;
    // this.products.push(newproduct);
    // return newproduct;
  }

  async getProductList() {
    const getProduct = await this.ProductModel.find().sort({ price: 1 });
    console.log('here are the list');
    return getProduct;
  }

  async deletePro(id: string) {
    const deletedItem = await this.ProductModel.findByIdAndDelete(id);
    console.log(deletedItem);
    return deletedItem;
  }
}
