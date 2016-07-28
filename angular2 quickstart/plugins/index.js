let webpack = require('webpack');
let ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
let injectFile = require('webpack-file-injector-plugin');


injectFile.options({verboseLogging:true , beep:true});

function errorDetector(){
  return function(){
        this.plugin("done", function(stats){
      stats.compilation.errors &&
      stats.compilation.errors.length &&
      console.log("\007"+'ERROR:',stats.compilation.errors[0].rawMessage);

    });
  }

}
module.exports = {
  Uglify:function(bool){
    if(bool){
      return new webpack.optimize.UglifyJsPlugin({warnings:false})
    }else{
      return new function noop(){}
    }
  },
  injectFile:injectFile,
  errorDetector:errorDetector,

  typescriptFork:function(){
    let fork = new ForkCheckerPlugin();
    return fork
  }
}
