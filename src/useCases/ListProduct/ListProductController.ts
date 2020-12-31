import { Request, Response } from 'express'
import { Product } from '../../entities/product.entity'

async function ListProductController(
  request: Request,
  response: Response
): Promise<Response> {
  const products = await Product.paginate({}, { page: 1, limit: 10 })

  return response.json(products)
}

export { ListProductController }
