import user from "../models/user.js"
import jwt from 'jsonwebtoken'
export const signup = async (req,res) =>{
    const {username,email,password,phoneNumber} = req.body ;
    try{
        const existingUser =await user.findOne({email})
        if(existingUser)
            return res.json({message:"username already used try other one"})

       const result = await user.create({username,email,password,phoneNumber})  
        const token = jwt.sign({username:result.username,id:result._id},'test',{expiresIn:'48h'})
        res.json(token)
    }catch(e){
        res.json(e.message)
        console.log(e)
    }
    
}

export const logIn = async (req,res) =>{
    const {username,email,password} = req.body ;
    try{
        const existingUser =await user.findOne({username})
        if(!existingUser)
            return res.json({message:"no user name with that name"})
        if(password != existingUser.password)
            return res.json({message:"the password in not correct"}) 
            const token = jwt.sign({username:existingUser.username,id:existingUser._id},'test',{expiresIn:'48h'})
            res.json( token)
    }catch(e){
        console.log(e)
    }
   
}
