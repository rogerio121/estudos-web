const bodyParser = require('body-parser')
const express = require('express')
const app = express()
 
/*Faz com que a pasta em questão seja usada com o 
/servidor assim posso usar o HTML, img e js dessa mesm apg*/
app.use(express.static('.'))
//Transforma os dados vindos da URL em Obj
app.use(bodyParser.urlencoded({extended: true}))
//Transforma recebido em JSON vindos da URL em Obj
app.use(bodyParser.json())

app.get('/test', (req, res) => res.send('Ok'))
app.listen(8081, () => console.log('Executando...'))