const userModel=require("../models/userModel")
const axios=require("axios")

const login=async(req,res,next)=>{

}
const register=async (req,res,next)=>{
   try{
    const {email,username,password}=req.body
    const usernameCheck=await userModel.findOne({username})
    if(usernameCheck){
        return res.json({msg:"username already used ", status:false})
    }
    const emailCheck=await userModel.findOne({email})
    if(emailCheck){
        return res.json({msg:"email already in use ", status:false})
    }
    const user=await userModel.create({
        email,username,password
    })
    return res.json({status:true,user})
    
   } catch(e){
       console.log(e.message);
   }
    
    
}
module.exports={
    login,
    register
}