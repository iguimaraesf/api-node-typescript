import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import * as yup from 'yup'

interface InterfaceCidade {
    nome: string
    estado: string
}

const validacao: yup.ObjectSchema<InterfaceCidade> = yup.object().shape({
    nome: yup.string().required().min(3),
    estado: yup.string().required().min(3),
})

export const create = async (req: Request<{}, {}, InterfaceCidade>, res: Response) => {
    const data = req.body
    let validatedData: InterfaceCidade | undefined = undefined
    try {
        validatedData = await validacao.validate(data, { abortEarly: false })
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
    console.log(validatedData)
    return res.send('Create!')
}
