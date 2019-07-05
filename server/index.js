require('dotenv').config()
const express = require('express')
const massive = require('massive')
const ctrl = require('../server/controller')
const app = express()
app.use(express.json())

const {SERVER_PORT, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING).then (db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => {
        console.log(`Server listening on port ${SERVER_PORT}.`)
    })
}).catch(err => console.log(err))

app.get('/api/inventory', ctrl.getProducts)
app.post('/api/product', ctrl.create)
app.delete('/api/product/:id', ctrl.delete)
app.put('/api/product/:id', ctrl.update)


