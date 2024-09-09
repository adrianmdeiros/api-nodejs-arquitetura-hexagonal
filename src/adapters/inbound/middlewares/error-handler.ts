import { NextFunction, Request, Response } from "express"
import { APIError } from "../../../application/helpers/APIError"

export const errorHandler = (err: APIError, req: Request, res: Response, next: NextFunction) => {
    return err ?
        res.status(err.statusCode).json(err.name)
        :
        res.status(500).json({ error: 'Internal Server Error' });
}