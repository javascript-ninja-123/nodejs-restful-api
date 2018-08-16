import mongoose from 'mongoose';
import {MONGODBURL} from '../secret';
import {ErrorMessage} from '../utils';
//IIFE function
(async () => {
  try{
    await mongoose.connect(MONGODBURL,{useNewUrlParser:true})
    console.log('mongoose is connected')
  }
  catch(err){
    ErrorMessage.simple({err, message:'mongoose failed'})
  }
})()

require('../model/user');
