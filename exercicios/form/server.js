const express = require('express')
const app = express()
const bodyParser = require('body-parser')

//O forme devolve o valor como URLEncode o body-parser transforma em json
app.use(bodyParser.urlencoded({ extended: true}))

//Funciona como o spring  
app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabéns</h1>')
})

app.listen(3003)