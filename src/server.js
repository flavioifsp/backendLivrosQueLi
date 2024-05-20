import express from 'express'
import { PORT, HOST } from './config.js'
import cors from 'cors'
import routerFilmes from './routers/filmesRouter.js'
import routerLivros from './routers/livrosRouter.js'

const app = express()



app.use(cors())
app.use(express.json())
app.use('/livros', routerLivros)
app.use('/filmes', routerFilmes)

app.listen(PORT, () => {
    console.log(`Server running on ${HOST}:${PORT}`)
})