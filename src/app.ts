import 'reflect-metadata'
import 'express-async-errors'
import 'dotenv/config'
import './database/connection'
import express from 'express'
import cors from 'cors'
import { routes } from './routes'

import { handleErrorMiddleware } from './middlewares/HandleErrorMiddleware'

const PORT = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.get('/', (request, response) => response.redirect('/documentation'))
app.use(handleErrorMiddleware)
app.listen(PORT, () => console.log(`Server is running on port ${PORT} 🔥`))
