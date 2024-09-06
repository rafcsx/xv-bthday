const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    home: './xv-bthday-main/Homescript.js',
    obrigadoMP: './xv-bthday-mp-obrigado-main/ObrigadoMPscript.js',
    obrigadoRSVP: './xv-bthday-obrigado-main/ObrigadoRSVPscript.js',
    photos: './xv-bthday-photos-main/Photoscript.js',
    presentes: './xv-bthday-presentes-main/Presentscript.js',
    recados: './xv-bthday-recados-main/Recadoscript.js',
    rsvp: './xv-bthday-rsvp-main/RSVPscript.js',
  },
  output: {
    filename: '[name].js', // Nome dos arquivos JS será baseado no nome da entrada
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.(svg|jpg|png)$/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext][query]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'xv-bthday-main/Homeindex.html'),
      filename: 'Home.html',
      chunks: ['home'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'xv-bthday-mp-obrigado-main/ObrigadoMPindex.html'),
      filename: 'ObrigadoMP.html',
      chunks: ['obrigadoMP'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'xv-bthday-obrigado-main/ObrigadoRSVPindex.html'),
      filename: 'ObrigadoRSVP.html',
      chunks: ['obrigadoRSVP'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'xv-bthday-photos-main/Photoindex.html'),
      filename: 'Photo.html',
      chunks: ['photos'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'xv-bthday-presentes-main/Presentindex.html'),
      filename: 'Present.html',
      chunks: ['presentes'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'xv-bthday-recados-main/Recadoindex.html'),
      filename: 'Recados.html',
      chunks: ['recados'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'xv-bthday-rsvp-main/RSVPindex.html'),
      filename: 'RSVP.html',
      chunks: ['rsvp'],
    }),
    new MiniCssExtractPlugin({
      filename: '[name]styles.css', // Nome dos arquivos CSS será baseado no nome da entrada
    }),
    new CopyPlugin({
      patterns: [
        { from: 'xv-bthday-main/img', to: 'img' },
        { from: 'xv-bthday-mp-obrigado-main/img', to: 'img' },
        { from: 'xv-bthday-obrigado-main/img', to: 'img' },
        { from: 'xv-bthday-photos-main/img', to: 'img' },
        { from: 'xv-bthday-presentes-main/img', to: 'img' },
        { from: 'xv-bthday-recados-main/img', to: 'img' },
        { from: 'xv-bthday-rsvp-main/img', to: 'img' },
        { from: '_redirects', to: '' }, // Adiciona a cópia do arquivo _redirects
      ],
    }),
  ],
  mode: 'production', // Mude para 'production' para builds finais
};
