var webpack = require('webpack')
var path = require('path');
var fs = require('fs');
var injectFile = require('webpack-file-injector-plugin');

 injectFile.options({beep:true ,keyword:'injectFile' , verboseLogging:true});
injectFile.on('transform' ,function(file ,dir ,callback){
  //console.log('-->',file)

  let x = file.replace(/foo/,'FOO2398123');
  //callback(x)
})



let bo = {
           presets:['stage-0','es2015'],
                   plugins:['transform-es2015-modules-commonjs','transform-decorators-legacy']
}
let bo1 = {
           presets:['es2015' ,'react'],
                   plugins:['transform-es2015-modules-commonjs','transform-decorators-legacy']
}
let optionalSettings = {
  enable:true,
	console:{
		enable:true,
		color:'red'
	},
	regex:{
		startWith:'STARTwithThis',
		safe:true
	}
}
module.exports = {
    entry: {
        'index': path.resolve(__dirname ,'demo/index'),
    },

    output: {
        path: path.resolve(__dirname ,'out'),
        filename: '[name].js'
    },
    cache: true,
    watch:true,

    resolve:{
      resolveLoader:{

      }
    },
    module: {
        loaders: [
           {
               test: /\.js$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'demo'),
               loaders:['webpack-inject-loader?'+JSON.stringify(optionalSettings ),`babel?${JSON.stringify(bo)}`],
          },
          {
              test: /\.jsx$/,
               exclude: /node_modules/,
               include: path.resolve(__dirname, 'demo'),
              loader:`babel?${JSON.stringify(bo1)}`,
         }
      ]

    },
resolve: {
        extensions: ['.js','.jsx',''],
        modulesDirectories: ['node_modules']
    },
plugins: [
   injectFile.plugin,
    function(){
    this.plugin("done", function(stats){
        if (stats.compilation.errors && stats.compilation.errors.length){
          //prevent gulp > task > INIT from clearing console if theres a error here
          process.env.blockConsole = true;
          //console BEEP
          console.log("\007"+stats.compilation.errors[0].error);


          return
        }


    });
}

],

externals:{
  electron:'commonjs electron'
}

}
