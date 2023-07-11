import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from 'dotenv'
import routes from './routes/routes.js'
import dish from "./models/dish.js";

const app =express() ;

app.use(bodyParser.json({limit:'30mb',extended:true}))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())
dotenv.config()

app.use('/',routes)

mongoose.connect('mongodb+srv://ramyromirso:k2Bb3RI4SKRvC7Qz@restaurant.dbgestu.mongodb.net/?retryWrites=true&w=majority')



app.listen(3000,console.log('connected'))




