const mongoose=require('mongoose')
const connectDB=async(url)=>{
   try{
    await mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log("connected to the database")
    }     
    )
   }catch(e){
       console.log(e.message);
   }
}

module.exports=connectDB