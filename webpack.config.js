const path = require('path');

module.exports = {
    entry: './src/js/Main.js',
    watch:true,
    output: {
        path: path.resolve(__dirname, './public/js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: __dirname + "/src/js",
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        presets: ['@babel/preset-env'],
                        plugins: ["@babel/plugin-proposal-class-properties"]
                    }
                }
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader' // creates style nodes from JS strings
                  }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                  }, {
                    loader: 'less-loader', options: {
                        strictMath: true,
                        noIeCompat: true
                      }
                  }]
            }
        ]
    }
};