import { Document } from 'mongoose'

export interface IProductRepository extends Document {
  title: string
  description: string
  url: string
  createdAt: Date
}
