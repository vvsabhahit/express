const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/hello',(req,res) => {
    res.send('hello')
})
app.post('/a',(req,res) => {
  res.send('hello')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
