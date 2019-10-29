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

//Usado para fazer upload de arquivos
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, '.')
    },
    filename: function(req, file, callback){
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage}).single('arquivo')

app.post('/upload',(req, res) =>{
    upload(req, res, err => {
        if(err){
            return res.end('Ocorreu um erro')
        }else{
            return res.end('Concluido com sucesso')
        }
    })
})

app.post('/formulario', (req, res) =>{
    res.send({
        ...req.body,
        id:1
    })
})

//req.body
//req.query
//req.params    

app.get('/parOuImpar', (req, res) =>{
    const valorEhPar = parseInt(req.query.numero) % 2 === 0
        
    res.send({
        parOuImpar: valorEhPar ? 'Par' : 'Impar'
    })
})

app.get('/test', (req, res) => res.send('Ok'))
app.listen(8081, () => console.log('Executando...'))