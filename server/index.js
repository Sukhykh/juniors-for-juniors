import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

const server = express()
dotenv.config()

const PORT = process.env.PORT || 4444

server.use(cors())
server.use(express.json())

server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
});