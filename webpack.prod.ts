import dotenv from 'dotenv'
import * as webpack from 'webpack'
import HtmlWebPackPlugin from 'html-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import * as path from 'path' // to get the current path

const htmlPlugin: HtmlWebPackPlugin = new HtmlWebPackPlugin({
  template: './public/index.html',
})

const env = dotenv.config().parsed

const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next])
  return prev
}, {})

const config: webpack.Configuration = {
  entry: './src/index.tsx',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      { test: /\.(js|jsx)$/, loader: 'babel-loader' },
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json'],
    alias: {
      assets: path.join(__dirname, 'assets'),
      src: path.join(__dirname, 'src'),
      lib: path.join(__dirname, 'lib'),
      ui: path.join(__dirname, 'src/ui'),
      root: path.join(__dirname, 'src/modules/root'),
      status: path.join(__dirname, 'src/modules/status'),
      bonuses: path.join(__dirname, 'src/modules/bonuses'),
      referral: path.join(__dirname, 'src/modules/referral'),
      promotions: path.join(__dirname, 'src/modules/promotions'),
      cards: path.join(__dirname, 'src/modules/cards'),
    },
  },
  plugins: [
    new CopyPlugin([
      {
        from: path.resolve(__dirname, 'public/images'),
        to: path.resolve(__dirname, 'dist/images'),
      },
    ]),
    new CleanWebpackPlugin(),
    htmlPlugin,
    new webpack.IgnorePlugin(/\/__tests__\//),
    new webpack.IgnorePlugin(/\/__mocks__\//),
    new webpack.DefinePlugin(envKeys),
  ],
  optimization: {
    removeAvailableModules: true,
    removeEmptyChunks: true,
    mergeDuplicateChunks: true,
    flagIncludedChunks: true,
    minimize: true,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
}

export default config
