import mongoose from 'mongoose'

const Connection= async ()=>{
    try{
        const URL=`mongodb+srv://?:?@cluster0.ueaga.mongodb.net/inshort?retryWrites=true&w=majority`
        await mongoose.connect(URL,{UseNewUrlParser:true})
        console.log("mongo_db conencted ")
    }catch(err){
      console.log("error while conecting todata base",err)
    }

}

export default Connection;