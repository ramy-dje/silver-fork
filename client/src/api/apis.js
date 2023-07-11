import axios from 'axios'

const baseUrl = "http://localhost:3000" ;

export const signUp =(data)=> axios.post(`${baseUrl}/signup`,data)
export const logIn =(data)=> axios.post(`${baseUrl}/login`,data)
export const getOneDish = (name)=> axios.get(`${baseUrl}/getonedish/${name}`)
export const getDishesMain =()=> axios.get(`${baseUrl}/getdishes/main`);
export const getDishesSalades =()=> axios.get(`${baseUrl}/getdishes/salades`);
export const getDishesDrinks =()=> axios.get(`${baseUrl}/getdishes/drinks`);
export const getDishesSoups =()=> axios.get(`${baseUrl}/getdishes/soups`);
export const getDishesDessert =()=> axios.get(`${baseUrl}/getdishes/dessert`);
export const getClientTestimonials = ()=>axios.get(`${baseUrl}/getclientstestimonials`);
export const addCommnet = (comment)=>axios.post(`${baseUrl}/sendcomment`,{comment});
export const bookTable = (data)=>axios.post(`${baseUrl}/bookTable`,data)
export const viewBookingTable = (name)=>axios.get(`${baseUrl}/viewtablebooking/${name}`)
