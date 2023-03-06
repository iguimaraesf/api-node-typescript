import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import * as yup from 'yup'
import { validation } from '../../shared/middleware'

interface ParamProps {
    id?: number
}

export const deleteByIdValidation = validation((getSchema) => ({
    params: getSchema<ParamProps>(yup.object().shape({
        id: yup.number().integer().required().moreThan(0),
    })),
}))

export const deleteById = async (req: Request<ParamProps>, res: Response) => {
    console.log(req.params)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado!')
}