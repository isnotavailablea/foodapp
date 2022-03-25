const { response } = require('express')
const exp=require('express')
const app=exp()
require('dotenv').config()
const cors=require('cors')
const mongo=require('mongoose')
const port ='8000'
mongo.connect(process.env.CONNECTION_URL)
app.use(exp.json())
app.unsubscribe(exp.urlencoded({extended:true}))
app.use(cors())

app.listen(port,()=>{
    console.log(`${port} is listening`)
})