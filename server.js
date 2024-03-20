const express =require('express')
const cors=require('cors')
const bodyParser=require('body-parser')


const App=express()
App.use(express.json()) 
App.listen(3333,function(data,error){
   if (error){
    console.log(error)
   }
    console.log ("Server is start")
})

App.get("/home",(req,res)=>{
res.send("home")
})

App.get("/product",(req,res)=>{
    
    res.send("details")

})

App.post("/Login",(req,res)=>{
    const datalogin=req.body
    let result=[]
    if(Object.keys(datalogin).length>0){
        result.push({success:true})
    }
    else{
        result.push({success:false})  
    }
    res.send(result)
})

App.get("/Register",(req,res)=>{
    res.send("register")
})
App.get("/Addtocart",(req,res)=>{
    res.send("cart")
})