import { Request, Response } from 'express'
import Product from '../models/Product'

export default {
  async index (req: Request, res: Response) {
    const products = await Product.paginate({}, { page: 1, limit: 10 })

    return res.json(products)
  },
  async show (req: Request, res: Response) {
    const product = await Product.findById(req.params.id)

    return res.json(product)
  },
  async store (req: Request, res: Response) {
    const createProduct = await Product.create(req.body)

    return res.status(201).json(createProduct)
  }
}
