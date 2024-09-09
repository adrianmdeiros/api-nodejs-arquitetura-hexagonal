import { Express } from 'express'
import { bodyParser, CORS, errorHandler } from '../../adapters/inbound/middlewares'

export default (app: Express): void => {
    app.use(bodyParser)
    app.use(CORS)
    app.use(errorHandler)
}