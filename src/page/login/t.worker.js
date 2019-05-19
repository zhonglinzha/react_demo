/*  eslint-disable */

console.log('worker----------')
const sleep  = time => {
  let startTime = Date.now();
  while (Date.now() - startTime < time) {}
  console.log('worker----------1111')
  postMessage('222222')
}

onmessage = function(e) {
    sleep(10000);
  }