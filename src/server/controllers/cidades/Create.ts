import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import * as yup from 'yup'
import { validation } from '../../shared/middleware'

interface InterfaceCidade {
    nome: string
}

interface InterfaceFiltro {
    filter?: string
}

export const createValidation = validation((getSchema) => ({
    body: getSchema<InterfaceCidade>(yup.object().shape({
        nome: yup.string().required().min(3),
    })),
}))

export const create = async (req: Request<{}, {}, InterfaceCidade>, res: Response) => {
    console.log(req.body)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado!')
}
