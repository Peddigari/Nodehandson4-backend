let arr=[]
const bcrypt=require("bcrypt")
const saltround=10
const register=(req,res)=>{
   const details= req.body;
//    console.log(details)
//    arr.push(details);
   const finder=arr.find((item)=>details.email===item.email);
   if(finder){
       return res.send({msg:"email already registered"});
   }
//    arr.push(details)
const generatesalt=bcrypt.genSaltSync(10)
console.log(generatesalt) 
const hashpassword=bcrypt.hashSync(details.password,saltround);
   console.log(hashpassword)
   const temp={
       email:details.email,
       password:hashpassword,
   }
   arr.push(temp);
    res.status(200).send({msg:"user is registered",result:arr})
}

const login= async (req,res)=>{
    const details=req.body;
    const find=arr.find((item)=>item.email===details.email);
    if(!find){
        return res.send({msg:"user not registered"})
    }
    const validate=await bcrypt.compare(details.password,find.password)
    if(!validate){
        return res.send({msg:"user entered wrong password"})
    }
    res.send({msg:"user has logged in successfully"})
}

module.exports={register,login}