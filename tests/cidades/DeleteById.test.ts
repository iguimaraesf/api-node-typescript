import { StatusCodes } from 'http-status-codes'
import { testServer } from '../jest.setup'

describe('Cidade - DeleteById', () => {
    it('Apaga um registro', async () => {
        const res1 = await testServer
            .post('/cidades')
            .send({nome: 'Caxias do Sul'})
        expect(res1.statusCode).toEqual(StatusCodes.CREATED)

        const resApagado = await testServer
            .delete(`/cidades/${res1.body}`)
            .send()
        expect(resApagado.statusCode).toEqual(StatusCodes.NO_CONTENT)
    })

    it('dá erro ao apagar um registro que não existe', async () => {
        const res1 = await testServer
            .delete('/cidades/99999')
            .send()
        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR)
        expect(res1.body).toHaveProperty('errors.default')
    })
})