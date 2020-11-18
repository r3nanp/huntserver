import { Router } from 'express'
import ProductController from './controllers/ProductController'

const routes = Router()

routes.get('/products', ProductController.index)
routes.get('/product/:id', ProductController.show)

routes.post('/create/product', ProductController.store)

export default routes
