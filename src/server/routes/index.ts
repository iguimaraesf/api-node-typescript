import { Router } from 'express'
import { CidadesController } from '../controllers'

const router = Router()

router.get('/', (_, res) => {
    return res.send('olá, dev!')
})

router.post(
    '/cidades', 
    CidadesController.createBodyValidator,
    CidadesController.createQueryValidator,
    CidadesController.create)

export { router }
