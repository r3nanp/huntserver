import mongoose, { Schema } from 'mongoose'

import mongoosePaginate from 'mongoose-paginate'
import { IModelProps } from '../repositories/IProductRepository'

const ProductSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

ProductSchema.plugin(mongoosePaginate)

const Product = mongoose.model<IModelProps>('Product', ProductSchema)

export { Product }
