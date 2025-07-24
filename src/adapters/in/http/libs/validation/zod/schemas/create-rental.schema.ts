import { z } from 'zod'
// to-do
export const CreateRentalSchema = z.object({
    customer: z.object({
        id: z.number().int().optional(), // opcional se for novo cliente
        name: z.string(),
        email: z.string().email(),
        phone: z.string(),
        password: z.string().min(6)
    }),
    rentalItems: z.array(z.object({
        days: z.number().int().positive(),
        quantity: z.number().int().positive(),
        gamePlatform: z.object({
            game: z.object({
                id: z.number().int(),
                name: z.string()
            }),
            platform: z.object({
                id: z.number().int(),
                name: z.string()
            }),
            dailyPrice: z.number()
        })
    }))
})