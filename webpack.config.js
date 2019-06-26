const path = require('path');

module.exports = {
    entry: {
        main: './src/index.jsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, 
              exclude: /node_modules/, 
              loader: "babel-loader" 
            }
        ]
    },
    mode: 'development'
}