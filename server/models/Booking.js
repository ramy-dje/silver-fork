import {Schema,model} from 'mongoose' ;
const bookingShema = Schema({
    name:String,
    day: String,
    time: String,
    childrenNumber:Number,
    adultsNumber:Number
})
export default model('booking',bookingShema)