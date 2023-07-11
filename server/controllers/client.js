import client from "../models/client.js";
export const getClientTestimonials = async (req,res) =>{
    try{

        const data = await client.find();
        console.log(data)
        res.json(data)

    }catch(e){
        console.log(e)
    }

}

