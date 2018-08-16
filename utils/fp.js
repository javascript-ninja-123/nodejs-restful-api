

export default class FP{

  static Right(x){
    return {
      map:f => Right(f(x)),
      fold:(f,g) => g(x),
      chain:g => g(x)
    }
  }
  static Left(x){
    return {
      map:f => Left(x),
      fold:(f,g) => f(x),
      chain:g => Left(x)
    }
  }
  static Either(fn){
    return (x) => {
      return fn() ? this.Right(x) : this.Left(x)
    }
  }
}
