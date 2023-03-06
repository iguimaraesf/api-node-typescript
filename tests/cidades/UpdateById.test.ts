import { StatusCodes } from 'http-status-codes'
import { testServer } from '../jest.setup'

describe('Cidades - UpdateById', () => {
    it('atualiza uma cidade', async () => {
        const res1 = await testServer
            .post('/cidades')
            .send({nome: 'Caxias do Sul'})
        expect(res1.statusCode).toEqual(StatusCodes.CREATED)

        const resAlterado = await testServer
            .put(`/cidades/${res1.body}`)
            .send({nome: 'Caxias'})
        expect(resAlterado.statusCode).toEqual(StatusCodes.NO_CONTENT)

    })

    it('dá erro ao atualizar uma cidade que não existe', async () => {
        const res1 = await testServer
            .put('/cidades/99999')
            .send({ nome: 'Caxias' })
        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR)
        expect(res1.body).toHaveProperty('errors.default')
    })
})
