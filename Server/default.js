import {data} from './constants/data.js';
import news from './model/news.js';


const DefaultData= async ()=>{
try{
    await news.deleteMany({});
    await news.insertMany(data);
    console.log("data insterted succesfully ");

}catch(err){
    console.log("error occured",error.message);
}
}

export default DefaultData;