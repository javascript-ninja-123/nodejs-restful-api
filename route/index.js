

module.exports = app => {
  app.use(require('./auth'))
  //error handling
  app.use((err,req,res,next) => {
    if(err) return res.status(err.status).send({err:err.message})
  })
}
