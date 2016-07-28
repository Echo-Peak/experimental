var path = require('path');
var webpack = require('webpack');
var setup = require('./setup');
//used to color console messages for easiy visulation
var colors = require('colors');

//sets setup.minify before gulp task runs....
var babelSettings = {
  presets:['stage-0','es2015'],
  plugins:['transform-es2015-modules-commonjs','transform-decorators-legacy']
}

var injecterOptions = {
  enable:true,
  console:{
    enabled:true,
    color:'green'
  },
  regex:{
    startWith:'@mixin ',
    safe:true,
  }
}
var webpackConfig = {
  entry: {
      'Consoleless': path.resolve(__dirname ,'src/libs/index')
  },
  output: {
      path: path.resolve(__dirname , 'built'),
      filename: '[name].js'
  },
  cache:setup.cache,
  watch:setup.watch,
  devtool:null,
  resolve:{
    extensions:['','.js'],
  },

  module: {
      loaders: [
          {
              test: /\.js$/,
              include: path.resolve(__dirname, 'src/libs'),
              loaders: [`webpack-inject-loader?${JSON.stringify(injecterOptions)}`,`babel?${JSON.stringify(babelSettings)}`]
         }
    ],

  },
plugins:[
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

if(~process.argv.indexOf('--minify')){
  webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({compress:{warnings:false}})
  );
  console.log('UGLYFIY ENABLED'.yellow)
  }
if(~process.argv.indexOf('--source-maps')){
    webpackConfig.devtool = 'source-map';
    console.log('SOURCE MAPS ENABLED'.yellow)
}


module.exports = webpackConfig
