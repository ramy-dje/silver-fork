import {Schema,model} from 'mongoose' ;
const clientShema = Schema({
    name:String,
    opinion:String,
    rating : Number,
    image : String
})
export default model('client',clientShema)