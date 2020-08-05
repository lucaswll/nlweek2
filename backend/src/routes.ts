import express from 'express'
import ClassesController from './controllers/ClassesController'
import QtyConnectionsController from './controllers/QtyConnectionsController'

const routes = express.Router()
const classesController = new ClassesController()
const connectionsController = new QtyConnectionsController()

routes.post('/classes', classesController.create)
routes.get('/classes', classesController.index)

routes.post('/connections', connectionsController.create)
routes.get('/connections', connectionsController.index)

export default routes