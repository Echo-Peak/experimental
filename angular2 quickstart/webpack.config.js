var webpack = require('webpack');
var path = require('path');
var enableSourceMaps = true;
var minify = false;
var sourceMap = false;
var watch = true;
var cache = true;
let target = 'node';
var plugins = require('./plugins');

~process.argv.indexOf('-source-maps') && (sourceMap = true);
~process.argv.indexOf('-nowatch') && (watch = false);
~process.argv.indexOf('-nocache') && (nocache = false);
~process.argv.indexOf('-target') && (target = process.argv[process.argv.indexOf('-target')+1]);


let typescriptLoader = {
  doTypeCheck:true,
  transpileOnly:true
}
typescriptLoader = JSON.stringify(typescriptLoader);

module.exports = {
  entry: {
    'app': path.resolve(__dirname, 'src/components/main')
  },

  output: {
    path: path.resolve(__dirname, 'compiled'),
    filename: '[name].js'
  },
  target:target,
  cache: cache,
  watch: watch,
  devtool: 'source-map',
  modulesDirectories: ['node_modules'],
    module: {
      loaders: [{
        test: /\.ts$/,
          exclude: [ /node_modules\/(?!(ng2-.+))/],

        loader:`ts-loader?transpileOnly=true`
      }]

  },

  resolve: {
    extensions: ['.ts', '' ,'.json','.js'],
    modulesDirectories: ['node_modules']
  },

  plugins: [
    plugins.errorDetector(),
  //  plugins.typescriptFork(),
    plugins.injectFile.plugin
  ],
  externals:{
    '@angular':'commonjs @angular'
  }


}
