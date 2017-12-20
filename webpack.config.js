module.exports = {
    // 入口文件
    entry: './index.js',

    // 输出文件
    output: {
        filename: 'bundle.js',
        publicPath: ''
    },

    module: {
    loaders: [{
      test:  /\.js[x]?$/,
      loader: 'babel-loader?presets[]=es2015&presets[]=react'
    }, {
      test: /\.css$/, // Only .css files
      loader: 'style!css' // Run both loaders
    }]
  }
};