import cors from 'cors';

const corsOptions = {
    origin: process.env.APP_ORIGIN_URL ?? 'http://localhost:3000'
}

export const CORS = cors(corsOptions)