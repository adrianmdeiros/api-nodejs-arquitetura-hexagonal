export interface HttpServerInputPort {
    setupMiddlewares(): void
    setupRoutes(): void
    listen(): unknown
}