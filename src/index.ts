import { server } from './server/Server'

const porta = process.env.PORT || 3333
server.listen(porta, () => console.log(`app rodando na porta ${porta}.`))
