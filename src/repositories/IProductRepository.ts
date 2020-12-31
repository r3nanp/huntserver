import { Document } from 'mongoose'

interface IProductRepository {
  title: string
  description: string
  url: string
  createdAt: Date
}

export type IModelProps = IProductRepository & Document
