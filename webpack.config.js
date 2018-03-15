const path = require( 'path' )

const base_path = path.resolve(__dirname, 'resources/assets')

module.exports = {
    entry: path.join(base_path, 'js', 'main.js'),

    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: "/dist",
        filename: "build.js"
    },
    devtool: 'source-map',
    resolve: {
        alias: {
            _components: path.join(base_path, 'js/components')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    postcss: [
                        require('autoprefixer')({
                            browsers: ['last 4 versions', 'IE 10']
                        })
                    ]
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
}