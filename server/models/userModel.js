const mongoose= require("mongoose")
const bcrypt =require("bcrypt")
const userSchema=new mongoose.Schema(
{
    username:{
        type:String,
        required:true,
        minlength:3,
        maxlength:20,
        unique:true
    },
    email:{
        type:String,
        required:true,
        minlength:10,
        unique:true,
        maxlength:50
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    isAvatarImageSet:{
        type:Boolean,
        default:false
    },
    avatarImage:{
        type:String,
        default:""
    }
}

)
userSchema.pre("save",async function (next){
    const gensalt=await bcrypt.genSalt()
    const hashedPassword=await bcrypt.hash(this.password,gensalt)
    this.password=hashedPassword;
    next()
    })

const userModel= mongoose.model("User",userSchema)
module.exports=userModel