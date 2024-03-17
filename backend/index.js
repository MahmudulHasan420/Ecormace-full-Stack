const express = require('express')
const app = express()


app.get('/', function (res,req){
    res.send("hellow world")
})

app.listen(8000,function(){
    console.log("port conceted")
})