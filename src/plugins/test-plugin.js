/* eslint-disable */
class HelloWorldPlugin {
  constructor(options){
    console.log('--------->1<-----------')
  }

  apply(compiler){
    // console.log('--------->\n ',compiler)
  }
}

module.exports = HelloWorldPlugin;