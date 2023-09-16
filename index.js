const express=require("express");
const route = require("./routes/userroute");
const app=express();
app.use(express.json())
app.use("/api",route)

app.listen(5000,()=>{
    console.log("server is running")
})

