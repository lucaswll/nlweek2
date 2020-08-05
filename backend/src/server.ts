import express from 'express'
import cors from 'cors'
import routes from './routes'

const app = express()

app.use(cors())
app.use(express.json())//fazendo com que seja convertido o json do body em js
app.use(routes)

app.listen(3333)