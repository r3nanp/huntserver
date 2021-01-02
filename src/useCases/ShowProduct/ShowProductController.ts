import { Request, Response } from 'express'
import { Product } from '@entities/product.entity'

async function ShowProductController(
  req: Request,
  res: Response
): Promise<Response> {
  const product = await Product.findById(req.params.id)

  return res.json(product)
}

export { ShowProductController }
