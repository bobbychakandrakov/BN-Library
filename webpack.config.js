const path = require('path');
const webpack = require('webpack');


module.exports = {
     entry: './src/main.js',
     output: {
         path: path.resolve(__dirname, 'dest'),
         filename: 'bundle.js'
     },
     mode: 'development'
 };
