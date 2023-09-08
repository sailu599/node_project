const express=require('express')
const app=express()
app.get('/',(req,res)=>{
    res.send('working da eley')
})
app.listen(process.env.PORT||8000)