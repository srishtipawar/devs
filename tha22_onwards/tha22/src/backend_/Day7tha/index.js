const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.use(express.static(path.join(__dirname,"public")))
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.get('/about', (req, res) => {
//     res.send('hii shivam')
// })

//   app.get('/Readme', (req, res) => {
//     res.send('Jai Ho Devsnest ki')
//   })
//   app.get('/g', (req, res) => {
//     res.sendFile(path.join(__dirname,'index.html'))
//   })

 app.get('/g',(req,res)=>{
     res.json({"shivam": 500})
 })

app.listen(port)