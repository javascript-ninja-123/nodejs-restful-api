


export const register = async (req,res,next) => {
  try{

  }
  catch(err){
    err.status = 400;
    next(err);
  }
}
