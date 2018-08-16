import {Schema} from 'mongoose';




const userSchema = new Schema({
  email:{
    type:String,
    unique:true,
    required:[true, 'email address required']
  },
  password:{
    type:String,
    min:[7, 'must be longer than 6 characters']
  }
})
