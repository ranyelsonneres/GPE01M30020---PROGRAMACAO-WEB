const express = require('express')
const app = express()
const port = 3000

//indicar quais os arquivos serão disponibilizados pelo servidor
app.use(express.static('public'));

//ajustar a requisição oriunda do cliente
app.use(express.urlencoded({extended: true}));

//rotas
app.get('/', (req, res) => {
  //res.send('Hello World!')
  res.sendFile(__dirname + '/public/index.html')
})

app.get('/sobre', (req, res) => {
    //res.send('Página Sobre - Teste')
    res.sendFile(__dirname + '/public/sobre.html')
  })

 app.post('/contato', (req, res)=>{
    const {nome, email} = req.body;
    res.send(`Dados recebidos: ${nome} - ${email}`);
 }) 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
