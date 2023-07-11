import dish from "../models/dish.js";

export const getOneDish = async(req,res)=>{
    const {dishid} = req.params ;
    try{    
        const data =await dish.findOne({name:dishid.trim()})
        res.json(data)
    }catch(e){
        console.log(e)
    }
}
export const getDishesMain =async (req,res)=>{
    try{    
        const data =await dish.find({type:'main'})
        res.json(data)
    }catch(e){
        console.log(e)
    }
}
export const getDishesSalades =async (req,res)=>{
    try{    
        const data =await dish.find({type:'salades'})
        res.json(data)
    }catch(e){
        console.log(e)
    }
}
export const getDishesDessert =async (req,res)=>{
    try{    
        const data =await dish.find({type:'dessert'})
        res.json(data)
    }catch(e){
        console.log(e)
    }
}
export const getDishesDrinks =async (req,res)=>{
    try{    
        const data =await dish.find({type:'drinks'})
        res.json(data)
    }catch(e){
        console.log(e)
    }
}
export const getDishesSoups =async (req,res)=>{
    try{    
        const data =await dish.find({type:'soups'})
        res.json(data)
    }catch(e){
        console.log(e)
    }
}
export const addCommnet = async (req,res)=>{
    const bodyData = req.body ;
    try{
        console.log(bodyData)
         const fetchData = await dish.findOne({name : bodyData.comment.dishName});
        const commentText = bodyData.comment.data
         fetchData.comments.push(commentText) 
         const updatedPost = await dish.findOneAndUpdate({name : bodyData.comment.dishName},fetchData)
         console.log(updatedPost)
    }catch(e){
        console.log(e)
    }
}