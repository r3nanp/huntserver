import mongoose, { Schema, Document } from 'mongoose'

import mongoosePaginate from 'mongoose-paginate'

interface Product extends Document {
  title: string
  description: string
  url: string
  createdAt: Date
}

const ProductSchema: Schema = new Schema({
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
  }
})

ProductSchema.plugin(mongoosePaginate)

const Product = mongoose.model<Product>('Product', ProductSchema)

export default Product
