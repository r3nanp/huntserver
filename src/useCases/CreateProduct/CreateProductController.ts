import { Request, Response } from 'express'
import { Product } from '@entities/product.entity'
import * as yup from 'yup'

async function CreateProductController(
  request: Request,
  response: Response
): Promise<Response> {
  const { title, description, url, createdAt } = request.body

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

  return response.status(201).json(createProduct)
}

export { CreateProductController }
