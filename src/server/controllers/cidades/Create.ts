import { Request, RequestHandler, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import * as yup from 'yup'

interface InterfaceCidade {
    nome: string
    estado: string
}

const validacaoBody: yup.ObjectSchema<InterfaceCidade> = yup.object().shape({
    nome: yup.string().required().min(3),
    estado: yup.string().required().min(3),
})

interface InterfaceFiltro {
    filter?: string
}

const validacaoQuery: yup.ObjectSchema<InterfaceFiltro> = yup.object().shape({
    filter: yup.string().min(3)
})

export const createQueryValidator: RequestHandler<{}, {}, InterfaceCidade> = async (req, res, next) => {
    try {
        const data = req.query
        await validacaoQuery.validate(data, { abortEarly: false })
        return next()
    } catch (err) {
        const yupError = err as yup.ValidationError
        const validationErrors: Record<string, string> = {}

        yupError.inner.forEach(error => {
            if (!error.path) return

            validationErrors[error.path] = error.message
        })
        return res.status(StatusCodes.BAD_REQUEST).json({
            errors: validationErrors
        })
    }
}

export const createBodyValidator: RequestHandler<{}, {}, InterfaceCidade> = async (req, res, next) => {
    try {
        const data = req.body
        await validacaoBody.validate(data, { abortEarly: false })
        return next()
    } catch (err) {
        const yupError = err as yup.ValidationError
        const validationErrors: Record<string, string> = {}

        yupError.inner.forEach(error => {
            if (!error.path) return

            validationErrors[error.path] = error.message
        })
        return res.status(StatusCodes.BAD_REQUEST).json({
            errors: validationErrors
        })
    }
}

export const create = async (req: Request<{}, {}, InterfaceCidade>, res: Response) => {
    console.log(req.body)
    return res.send('Create!')
}
