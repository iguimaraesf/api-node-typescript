import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'

const router = Router()

router.get('/', (_, res) => {
    return res.send('olá, dev!')
})

router.post('/teste', (req, res) => {
    console.log(req.body)
    return res.status(StatusCodes.CONFLICT).send(req.body)
})

export { router }
