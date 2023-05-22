// webpack.config.js
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

const __dirname = path.resolve();

export default {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'bundle.js'
    },
    module: {
        rules: [
            // `ts` and `tsx` files are parsed using `ts-loader`
          { 
            test: /\.(ts|tsx)$/, 
            loader: "ts-loader",
            exclude: /node_modules/,
          },
        //   {
        //     test: /\.css$/i,
        //     use: ['style-loader', 'css-loader'],
        //   }
        ],
      },
      resolve: {
        extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],    
    },
    plugins:[
        new HtmlWebpackPlugin({
        template: './index.html'
    })
    ],
    devServer: {
      static: {       
        directory: path.resolve(__dirname, './dist')
      },
      compress: true,
      port: 9002,
    }
}


