import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import * as yup from 'yup'
import { validation } from '../../shared/middleware'

interface QueryProps {
    page?: number
    limit?: number
    filter?: string
}

export const getAllValidation = validation((getSchema) => ({
    query: getSchema<QueryProps>(yup.object().shape({
        page: yup.number().moreThan(0),
        limit: yup.number().moreThan(0),
        filter: yup.string().min(3),
    })),
}))

export const getAll = async (req: Request<{}, {}, {}, QueryProps>, res: Response) => {
    console.log(req.query)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado!')
}
