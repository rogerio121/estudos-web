const express = require('express')
const app = express()
const bodyParser = require('body-parser')

//O forme devolve o valor como URLEncode o body-parser transforma em json
app.use(bodyParser.urlencoded({ extended: true}))

//Funciona como o spring  
app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabéns Incluido</h1>')
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns Alterado</h1>')
})

app.listen(3003)