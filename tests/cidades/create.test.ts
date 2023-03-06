import { StatusCodes } from 'http-status-codes'
import { testServer } from '../jest.setup'

describe('Cidades - Create', () => {
    it('Cria registro', async () => {
        const res1 = await testServer
            .post('/cidades')
            .send({ nome: 'Caxias do Sul' })

        expect(res1.statusCode).toEqual(StatusCodes.CREATED)
        expect(typeof res1.body).toEqual('number')
    })

    it('Rejeita nome curto', async () => {
        const res1 = await testServer
            .post('/cidades')
            .send({ nome: 'xi' })

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST)
        expect(res1.body).toHaveProperty('errors.body.nome')
        expect(res1.body.errors.body.nome).toBe('Deve ter pelo menos 3 caracteres')
    })

    it('Tem que ter o nome', async () => {
        const res1 = await testServer
            .post('/cidades')
            .send({ })

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST)
        expect(res1.body).toHaveProperty('errors.body.nome')
        expect(res1.body.errors.body.nome).toBe('Este campo é obrigatório')
    })

})
