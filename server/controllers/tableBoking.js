import Booking from "../models/Booking.js";
import twilio from 'twilio'
export const bookTable= async(req,res)=>{
    const data=req.body
    try{
        const savedBooking = await Booking.create(data);
        const accountSid = "AC3fdfc8004fd51b2c39ffb89eb09e8434";
        const authToken = 'e14ec8babb765ae181c12b3466d4688f';
        const client = twilio(accountSid, authToken);
        client.messages
        .create({ body: `you have booked a table on the day ${data.day} at ${data.time}`, from: "+12705176424", to: "+213782100526" })
            .then(message => console.log(message.sid));

    }catch(e){
        console.log(e);
    }
}
export const ViewTableBooking = async(req,res)=>{
    try{
        const data = await Booking.find({name:req.params.name}) ;
        console.log(data)
        res.json(data)
    }catch(e){

    }
}