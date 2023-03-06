import { RequestHandler } from 'express'
import { AnyObject, Maybe, ObjectSchema, ValidationError } from 'yup'
import { StatusCodes } from 'http-status-codes'

type TProperty = 'body' | 'header' | 'params' | 'query'
type TGetSchema = <T extends Maybe<AnyObject>>(schema: ObjectSchema<T>) => ObjectSchema<T>

type TAllSchemas = Record<TProperty, ObjectSchema<any>>
type TGetAllSchemas = (getSchema: TGetSchema) => Partial<TAllSchemas>

type TValidation = (getAllSchemas: TGetAllSchemas) => RequestHandler
// com interface funciona, mas fica esquisito
//interface Teste {
//    (): RequestHandler
//}
export const validation: TValidation = (getAllSchemas) => async (req, res, next) => {
    const schemas = getAllSchemas(schema => schema)
    // console.log(schemas)
    const errorsResult: Record<string, Record<string, string>> = {}
    Object.entries(schemas).forEach(([key, schema]) => {
        try {
            const data = req[key as TProperty]
            schema.validateSync(data, { abortEarly: false })
        } catch (err) {
            const yupError = err as ValidationError
            const validationErrors: Record<string, string> = {}
    
            yupError.inner.forEach(error => {
                if (!error.path) return
    
                validationErrors[error.path] = error.message
            })
            errorsResult[key] = validationErrors
        }
    })
    if (Object.entries(errorsResult).length === 0) {
        return next()
    } else {
        return res.status(StatusCodes.BAD_REQUEST).json({ errors: errorsResult })
    }
}
