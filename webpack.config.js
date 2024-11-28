const path = require('path');
const HTMLWebpackPlugins = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
  },
  plugins: [
    new HTMLWebpackPlugins({
       template: path.resolve(__dirname, 'public/index.html')
    }),
  ],
//  devServer: {
//      static: path.resolve(__dirname, './dist'), // путь, куда "смотрит" режим разработчика
//        compress: true, // это ускорит загрузку в режиме разработки
//        port: 8080, // порт, чтобы открывать сайт по адресу localhost:8080, но можно поменять порт
//        open: true, // сайт будет открываться сам при запуске npm run dev
//        hot: true,
//  },
};

//module.exports — это синтаксис экспорта в Node.js