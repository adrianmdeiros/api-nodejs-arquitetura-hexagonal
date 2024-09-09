import { Express } from 'express'
import { routes } from '../../adapters/inbound/routes'

export default (app: Express): void => {
    app.use('/api', routes)
}