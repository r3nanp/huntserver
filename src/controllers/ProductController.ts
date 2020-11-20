import { Request, Response } from 'express'
import * as yup from 'yup'

import Product from '../models/Product'

export default {
  async index(req: Request, res: Response) {
    const products = await Product.paginate({}, { page: 1, limit: 10 })

    return res.json(products)
  },
  async show(req: Request, res: Response) {
    const product = await Product.findById(req.params.id)

    return res.json(product)
  },

  async store(req: Request, res: Response) {
    const { title, description, url, createdAt } = req.body

    const data = { title, description, url, createdAt }

    const schema = yup.object().shape({
      title: yup.string().max(50).min(4).required(),
      description: yup.string().max(200).min(4).required(),
      url: yup.string().min(5).required(),
    })

    await schema.validate(data, {
      abortEarly: false,
    })

    const createProduct = await Product.create(data)

    return res.status(201).json(createProduct)
  },
}
