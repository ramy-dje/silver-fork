import {Schema,model} from 'mongoose' ;

const userSchema = Schema({
    username : {type:String,required:true},
    email :{type:String,required:false} ,
    password : {type:String,required:true} ,
    phoneNumber : Number 
})

export default model('userSchema',userSchema)