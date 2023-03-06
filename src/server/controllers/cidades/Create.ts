import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import * as yup from 'yup'
import { validation } from '../../shared/middleware'

interface BodyProps {
    nome: string
}

export const createValidation = validation((getSchema) => ({
    body: getSchema<BodyProps>(yup.object().shape({
        nome: yup.string().required().min(3),
    })),
}))

export const create = async (req: Request<{}, {}, BodyProps>, res: Response) => {
    console.log(req.body)
    return res.status(StatusCodes.CREATED).json(1)
}
