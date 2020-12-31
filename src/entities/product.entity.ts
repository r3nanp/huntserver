import mongoose, { Schema } from 'mongoose'

import mongoosePaginate from 'mongoose-paginate'
import { IProductRepository } from '../repositories/IProductRepository'

const ProductSchema = new Schema<IProductRepository>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

ProductSchema.plugin(mongoosePaginate)

const Product = mongoose.model('Product', ProductSchema)

export { Product }
