import express from 'express';
import { signup ,logIn} from '../controllers/authentification.js';
import {getDishesMain,getDishesDessert,getDishesDrinks,getDishesSalades,getDishesSoups,getOneDish,addCommnet} from '../controllers/dishs.js'
import { getClientTestimonials } from '../controllers/client.js';
import { bookTable ,ViewTableBooking} from '../controllers/tableBoking.js';
import Stripe from 'stripe';

const stripe = Stripe('sk_test_51NP5fhBK6fvdQPvJyf39M2eGAKOvbxZ4FCPjCsGQdQHDVFAjKqbf0NfNEy5NqapW7DImoYmrs36ZqssufiIs4RPJ008m4OjJwF')
const router = express.Router();
router.post('/signup',signup)
router.post('/login',logIn)
router.get('/getonedish/:dishid',getOneDish)
router.get('/getdishes/main',getDishesMain)
router.get('/getdishes/dessert',getDishesDessert)
router.get('/getdishes/drinks',getDishesDrinks)
router.get('/getdishes/salades',getDishesSalades)
router.get('/getdishes/soups',getDishesSoups)
router.get('/getclientstestimonials',getClientTestimonials)
router.post('/sendcomment',addCommnet)
router.post('/bookTable',bookTable)
router.get('/viewtablebooking/:name',ViewTableBooking)
router.post('/create-checkout-session',async (req,res)=>{
    try{
        console.log(req.body)
        const session =await stripe.checkout.sessions.create({
            payment_method_types : ['card'],
            line_items :req.body.map((e)=>{
                return{
                    price_data:{
                        currency : 'usd',
                        product_data : {
                            name : e.name,
                            images : [e.image]
                        },
                        unit_amount : e.price
                    },
                    quantity : e.number
                }
            }) ,
            mode : 'payment',
            success_url : 'http://localhost:5173',
            cancel_url : 'http://localhost:5173'
        })
        res.json(session.url)
    }catch(e){
        res.json(e)
    }
})

export default router ;