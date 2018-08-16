import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  email:{
    type:String,
    unique:true,
    required:[true, 'email address required']
  },
  password:{
    type:String,
    min:[7, 'must be longer than 6 characters'],
    required:true,
    validate:{
      validator:(v) => {
        const passwordStrength = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
        return passwordStrength.test(v)
      }
    }
  },
  profile:{
    firstName:{
      type:String
    },
    lastName:{
      type:String
    },
    phone:{
      type:String,
      validate:{
        validator:(v) => {
          //want it to be in this format 444-333-4444
          return /\d{3}-\d{3}-\d{4}/.test(v);
        }
      }
    }
  }
})


userSchema.pre('save', function(next){
  try{
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(this.password,salt);
    this.password = hash;
    next()
  }
  catch(err){next(err)}
})

userSchema.statics.save = async function(userObj){
  const User = mongoose.model('User');
  try{
    const newUser = new User(userObj);
    return newUser.save();
  }
  catch(err){
    return null;
  }
}



userSchema.statics.get = async function(id = null){
  const User = mongoose.model('User');
  try{
    //if there is no id, fetch all users
    if(id == null){
      const users = await User.find({});
      return users;
    }
      //if there is an id =. fetch single user
    else{
      const user = await User.findById(id)
      return user;
    }
  }
  catch(err){
    return null
  }
}

userSchema.statics.delete = async function(id){
  const User = mongoose.model('User');
  try{
    const result = await User.findByIdAndDelete(id);
    return result
  }
  catch(err){
    return null
  }
}





const User = mongoose.model("User", userSchema);
