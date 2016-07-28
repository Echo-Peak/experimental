var webpack = require('webpack')
var path = require('path');
var fs = require('fs')
var production = false;
var colorize = require('colors');
var enableSourceMaps = false;
var net = require('net');
var minifyJS = false; //boolean
process.env.blockConsole = false;
var client = net.connect(3555);
module.exports = {
    entry: {
        'external': path.resolve(__dirname ,'front-end/components/index'),
        'internal': path.resolve(path.resolve(__dirname ,'front-end/internal/app'))
    },
    target:'node',
//errorDetails:true,
    output: {
        path: path.resolve(__dirname ,'front-end'),
        filename: '[name].js'
    },
    cache: true,
    watch:true,


    module: {
        loaders: [

            {
                test: /\.jsx$/,
                 exclude: /node_modules/,
                 include: path.resolve(__dirname, 'front-end/components'),
                loader: 'babel',
                query:{
                    presets:['stage-0','react'  ,'es2015'],
                    plugins:['transform-es2015-modules-commonjs','transform-decorators-legacy']
                }
           },
           {
               test: /\.js$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'front-end/internal'),
               loader: 'babel',
               query:{
                   presets:['stage-0' ,'es2015'],
                   plugins:['transform-es2015-modules-commonjs','transform-decorators-legacy']
               }
          }
      ]

    },
resolve: {
        extensions: ['.js','.jsx',''],
        modulesDirectories: ['node_modules']
    },
node:{
  setImmediate:'empty',
  fileSystem:'empty'
},
plugins: [

    function(){
    this.plugin("done", function(stats){
        if (stats.compilation.errors && stats.compilation.errors.length){
          //prevent gulp > task > INIT from clearing console if theres a error here
          process.env.blockConsole = true;
          //console BEEP
          console.log("\007"+stats.compilation.errors[0].error);


          return
        }
        client.write('reload');

    });
}

],

externals:{
  electron:'commonjs electron'
}

}
