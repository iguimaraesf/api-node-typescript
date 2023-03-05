import { Request, Response } from 'express'

interface InterfaceCidade {
    nome: string
}

export const create = (req: Request<{}, {}, InterfaceCidade>, res: Response) => {
    const data = req.body
    console.log(data)
    return res.send('Create!')
}
