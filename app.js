const express=require('express')
const app=express()
app.listen(4000)
const service=require('./service.js')
app.get('/',(request,response)=>{
    response.send("Home page")
})
app.use('/service',service)