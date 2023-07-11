import {Schema,model} from 'mongoose' ;

const dishSchema = Schema({
    name : String,
    image: String,
    type:String,
    description : String,
    comments : [String],
    rating : String,
    price : Number
})

export default model('dish',dishSchema)