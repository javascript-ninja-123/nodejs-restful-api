

export default class ErrorMessage{
  constructor(){

  }
  //dev purpose simple error message on terminal
  static simple({err = {},message}){
    console.log('====== error =====')
    console.log(err)
    console.log(message)
    console.log('===== error =====')
  }

  //we will implement Slack channel error message
}
