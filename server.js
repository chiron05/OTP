const express=require('express')
const app=express()
const PORT=3030
const otpGenerator = require('otp-generator')



app.get('/api/otp',(req,res)=>{
    res.json(Math.floor(1000 + Math.random() * 9000))
})

app.listen(PORT,()=>{
    console.log(`server listening port ${PORT}`)
})