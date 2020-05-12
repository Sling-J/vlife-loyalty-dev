import dotenv from 'dotenv'
import * as webpack from 'webpack'
import HtmlWebPackPlugin from 'html-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import prodWebpack from './webpack.prod'
import * as path from 'path' // to get the current path

const htmlPlugin: HtmlWebPackPlugin = new HtmlWebPackPlugin({
  template: './public/index.html',
})

const currentPath = path.join(__dirname)

// path to dev env
const finalPath = currentPath + '/.env.development'

// Set the path parameter in the dotenv config
const fileEnv = dotenv.config({ path: finalPath }).parsed

const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(fileEnv[next])
  return prev
}, {})

const config: webpack.Configuration = {
  entry: prodWebpack.entry,
  mode: 'development',
  watch: true,
  devServer: {
    historyApiFallback: true,
    quiet: false,
    noInfo: false,
    stats: 'minimal',
    lazy: false,
    hot: true,
    contentBase: path.resolve(__dirname, 'public'),
  },
  module: prodWebpack.module,
  resolve: prodWebpack.resolve,
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(),
    htmlPlugin,
    new webpack.IgnorePlugin(/\/__tests__\//),
    new webpack.IgnorePlugin(/\/__mocks__\//),
    new webpack.DefinePlugin(envKeys),
  ],
}

export default config
