import * as mongoose from 'mongoose';

export interface Products {
  id: string;
  name: string;
  description: string;
  price: number;
}

export const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
});
