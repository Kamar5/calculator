var config = {
   entry: './index.js',

   output: {
      path:'/',
      filename: 'index.js',
   },

   devServer: {
      inline: true,
      port: 3001
   },

   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',

            query: {
               presets: ['es2015', "stage-2", "react"]
            }
         }
      ]
   }
}

module.exports = config;
