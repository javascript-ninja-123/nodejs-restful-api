import mongoose from 'mongoose';
//imported the user schema
const User = mongoose.model('User');


export const register = async (req,res,next) => {
  try{
  //req.body is from front-end
  //and it should look like
  //{
   //email:'adfad@gmail.com',
   //password:'asgdsgasdga'
  //}
  const result = await User.save(req.body)
  res.status(200).send(result);

  }
  catch(err){
    err.status = 400;
    next(err);
  }
}

export const getUsers = async (req,res,next) => {
  try{
    const users = await User.get();
    res.status(200).send(users);
  }
  catch(err){
    err.status = 400;
    next(err);
  }
}

export const getUser = async (req,res,next) => {
  try{
    const user = await User.get(req.params.id);
    res.status(200).send(user);
  }
  catch(err){
    err.status = 400;
    next(err);
  }
}

export const deleteUser = async (req,res,next) => {
  try{
    const deletedUser = await User.delete(req.params.id)
    res.status(200).send(deletedUser)
  }
  catch(err){
    err.status = 400;
    next(err);
  }
}
