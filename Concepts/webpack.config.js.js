var path = require('path');
var webpack = require('webpack');
var setup = require('./setup');

//used to color console messages for easiy visulation
var colors = require('colors');

var INIT = function(){
  if(process.argv[3]){
      var minifyArg = process.argv[3].replace(/-/g,'');//removes -- from --minify
  if(minifyArg == 'minify'){
      setup.minify = true;
  }
  }
}

INIT(); //sets setup.minify before gulp task runs....

module.exports = {
  entry: {
      'Modules': path.resolve(__dirname ,'src/components/APP' ),
  },
  output: {
      path: path.resolve(__dirname , 'built'),
      filename: '[name].js'
  },
  cache:setup.cache,
  watch:setup.watch,
  devtool:setup.sourceMaps ? 'source-map' : void 0,
  resolve:{
    extensions:['','.js']
  },
  module: {
      loaders: [
          {
              test: /\.js$/,
              exclude: /node_modules/,
              include: path.resolve(__dirname, 'src/components'),
              loader: 'babel',
              query:{
                  presets:['stage-0', 'es2015'],
                  plugins:['transform-es2015-modules-commonjs','transform-decorators-legacy']
              }
         }
    ],


  },
plugins:[
    setup.minify ? new webpack.optimize.UglifyJsPlugin({compress:{warnings:false}}) : function () {},
      function(){
      this.plugin("done", function(stats){
          if (stats.compilation.errors && stats.compilation.errors.length){
            //prevent gulp > task > INIT from clearing console if theres a error here
            setup.blockConsole = true;
            //console BEEP
            console.log("\007"+stats.compilation.errors[0].error);



          }

      });
  }

  ]
}
