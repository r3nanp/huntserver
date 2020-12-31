import { Router } from 'express'
import { CreateProductController } from '../useCases/CreateProduct/CreateProductController'
import { ListProductController } from '../useCases/ListProduct/ListProductController'
import { ShowProductController } from '../useCases/ShowProduct/ShowProductController'

const routes = Router()

routes.get('/products', ListProductController)
routes.get('/product/:id', ShowProductController)

routes.post('/create/product', CreateProductController)

export { routes }
