import { StatusCodes } from 'http-status-codes'
import { testServer } from '../jest.setup'

describe('Cidades - getById', () => {
    it('busca uma cidades pelo id', async () => {
        const res1 = await testServer
            .post('/cidades')
            .send({nome: 'Caxias do Sul'})
        expect(res1.statusCode).toEqual(StatusCodes.CREATED)

        const resBuscado = await testServer
            .get(`/cidades/${res1.body}`)
            .send()
        expect(resBuscado.statusCode).toEqual(StatusCodes.OK)
        expect(resBuscado.body).toHaveProperty('nome')
    })

    it('dá erro ao buscar uma cidades por um id inexistente', async () => {
        const res1 = await testServer
            .get('/cidades/99999')
            .send()
        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR)
        expect(res1.body).toHaveProperty('errors.default')
    })
})
