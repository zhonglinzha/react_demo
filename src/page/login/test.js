/* eslint-disable */
function test(){

  return function(target){
    target.n = 1;
    // return target;
    // return target;
  }
}

@test()
class Test {
  constructor(){}
  add(){}
}

export default Test;