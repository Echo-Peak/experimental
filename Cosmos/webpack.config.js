var webpack = require('webpack')
var path = require('path');
var fs = require('fs')
var production = false;
var colorize = require('colors');
var enableSourceMaps = true;
var minifyJS = process.env.MINIFY; //boolean
process.env.blockConsole = false;
module.exports = {
    entry: {
        'Components': path.resolve(__dirname ,'src/components/APP'),
        'External': path.resolve(__dirname ,'src/external/index'),
    },

    output: {
        path: path.resolve(__dirname ,'built'),
        filename: '[name].js'
    },
    //cache: true,
    watch:true,

    devtool: enableSourceMaps ? 'source-map' : void 0,


    module: {
        loaders: [

            {
                test: /\.jsx$/,
                 exclude: /node_modules/,
                 include: path.resolve(__dirname, 'src/components'),
                loader: 'babel',
                query:{
                    presets:['stage-0','react'  ,'es2015'],
                    plugins:['transform-es2015-modules-commonjs','transform-decorators-legacy']
                }
           },
            {
                test: /\.js$/,
              //  exclude: /node_modules/,
                include: path.resolve(__dirname, 'src/external'),
                loader: 'babel',
                query:{
                    presets:['stage-0', 'es2015'],
                    plugins:['transform-es2015-modules-commonjs','transform-decorators-legacy']
                }
           }

      ]

    },

    resolve: {
        extensions: ['.js','.jsx',''],
        modulesDirectories: ['node_modules']
    },

    plugins: [
        minifyJS ? new webpack.optimize.UglifyJsPlugin({warnings:false}) : function () {},
        function(){
        this.plugin("done", function(stats){
            if (stats.compilation.errors && stats.compilation.errors.length){
              //prevent gulp > task > INIT from clearing console if theres a error here
              process.env.blockConsole = true;
              //console BEEP
              console.log("\007"+stats.compilation.errors[0].error);



            }

        });
    }

    ]

}
