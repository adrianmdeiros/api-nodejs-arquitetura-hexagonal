import express, { Express, Router } from 'express';
import { inject, injectable } from 'tsyringe';
import { HttpServerInputPort } from '../../../../../application/ports/in/http-server.input.port';
import { bodyParser, CORS, errorHandler } from './middlewares';

@injectable()
export class ExpressAdapter implements HttpServerInputPort {
    private app: Express
    private port = process.env.PORT || 5000

    constructor(
        @inject('Routes') private readonly routes: Router
    ) {
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
        this.app.use('/api', this.routes)
    }

    listen(): unknown {
        return this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port} 📦🔥`);
        })
    }
}


