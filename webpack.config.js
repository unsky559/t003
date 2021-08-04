const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, 'src/pages/landing/index.html'),
    //   filename: path.resolve(__dirname, 'dist/pages/index.html'),
    //   chunks: ['main']
    // }),
    new CopyPlugin({
      patterns: [
        { from: 'src/res', to: 'res' }
      ]
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
        {
          loader: 'file-loader',
          options: {
            outputPath: 'pages',
            name: '[folder]/[name].css'
          }
        },
        {
          loader: "sass-loader",
          options: {
            sourceMap: true
          }
        }],
      },
      {
        test: /\.html$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'pages',
              name: '[folder]/[name].html'
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    open: true,
    disableHostCheck: true,
  },
};