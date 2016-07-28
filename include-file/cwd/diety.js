module.exports = {
    entry: {
        'index': path.resolve(__dirname ,'demo/index'),
    },

    output: {
        path: path.resolve(__dirname ,'out'),
        filename: '[name].js'
    },
  //  cache: true,
    ///watch:true,

    resolve:{
      resolveLoader:{

      }
    },
    // module: {
    //     loaders: [
    //        {
    //            test: /\.js$/,
    //             exclude: /node_modules/,
    //             include: path.resolve(__dirname, 'demo'),
    //            loader:'./index',
    //       }
    //   ]
    //
    // },
resolve: {
        extensions: ['.js','.jsx',''],
        modulesDirectories: ['node_modules']
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


    });
}

],

externals:{
  electron:'commonjs electron'
}

}
