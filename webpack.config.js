// module.exports = {
//     // devtool: 'inline-sourcemap',
//     entry: './app.js',
//     output: {
//         path: __dirname + '/dist',
//         filename: 'bundle.js'
//     },
//     module: {
//         loader: [
//             {
//                 test: /\.(js|jsx)$/,
//                 exclude: /node_modules/,
//                 loader: ['babel-loader', 'react-hot']
//             }
//         ]
//     }
// };

module.exports = {
    entry: './src/App.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};
