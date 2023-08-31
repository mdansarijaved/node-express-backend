const express = require('express')
const app = express()

app.get('/',(res,req)=>{
  res.send("user page")
})

app.listen(3000)