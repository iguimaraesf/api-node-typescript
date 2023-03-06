import { Request, RequestHandler, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import * as yup from 'yup'
import { validation } from '../../shared/middleware'

interface InterfaceCidade {
    nome: string
    estado: string
}

interface InterfaceFiltro {
    filter?: string
}

export const createValidation = validation((getSchema) => ({
    body: getSchema<InterfaceCidade>(yup.object().shape({
        nome: yup.string().required().min(3),
        estado: yup.string().required().min(3),
    })),
    query: getSchema<InterfaceFiltro>(yup.object().shape({
        filter: yup.string().min(3)
    })),
}))

export const create = async (req: Request<{}, {}, InterfaceCidade>, res: Response) => {
    console.log(req.body)
    return res.send('Create!')
}
