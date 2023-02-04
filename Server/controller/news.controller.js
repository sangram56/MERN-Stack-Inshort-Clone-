import News from '../model/news.js'



export const getNews=async (req,res)=>{
    try{
        const size=Number(req.query.size);                   //size and page for infinite acroll 5*0=0 5*1=5 5*2=10
        const skip=Number(req.query.page);
      let data= await  News.find({ }).limit(size).skip(size*skip)
      res.status(200).json(data);
    }catch(error){
      res.status(500).json(error);
    }
}