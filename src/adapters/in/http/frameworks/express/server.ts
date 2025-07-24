import express from 'express'
import { Express } from "express";
import { bodyParser, CORS, errorHandler } from './middlewares';
import { routes } from './routes';
import { HttpServerInputPort } from '../../../../../application/ports/in/http-server.input.port';

export class ExpressAdapter implements HttpServerInputPort {
    private app: Express
    private port = process.env.PORT || 5000

    constructor() {
        this.app = express()
        this.setupMiddlewares()
        this.setupRoutes()
    }

    setupMiddlewares(): void {
        this.app.use(bodyParser)
        this.app.use(CORS)
        this.app.use(errorHandler)
    }

    setupRoutes(): void {
        this.app.use('/api', routes)
    }

    listen(): unknown {
        return this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port} 📦🔥`);
        })
    }
}


