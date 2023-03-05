import { Request, Response } from 'express'
import * as yup from 'yup'

interface InterfaceCidade {
    nome: string
}

const validacao: yup.ObjectSchema<InterfaceCidade> = yup.object().shape({
    nome: yup.string().required().min(3),
})

export const create = async (req: Request<{}, {}, InterfaceCidade>, res: Response) => {
    const data = req.body
    let validatedData: InterfaceCidade | undefined = undefined
    try {
        validatedData = await validacao.validate(data)
    } catch (error) {
        const yupError = error as yup.ValidationError
        return res.json({
            errors: {
                default: yupError.message
            }
        })
    }
    console.log(validatedData)
    return res.send('Create!')
}
