const express = require("express")

const cors = require("cors")

const port = process.env.PORT || 5005;




const app = express()

app.use(cors())



app.get("/", (req,res)=>{


    res.send("Hello Server")

})


app.get("/users",(req ,res)=>{


    res.send(users)



})


const users =[

    {id:"1",name:"tanin",email:"tanin@gmail.com"},

    {id:"2",name:"shahin",email : "shahin@gmail.com"},

    {id:"3",name:"siam", email:"siam@gmail.com"}
]




app.listen(port,()=>{
    console.log(`My server Running is Port :${port}`)
})