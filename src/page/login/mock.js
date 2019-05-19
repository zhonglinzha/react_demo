/* eslint-disable */
let a = 1;
const test = function(params) {
    a++;
    console.log(a);
}

module.exports =  {
    a,
    // get a(){ return a},
    // set a(arg){ a = 'aa'; },
    test
}