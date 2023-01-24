const HtmhlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtract = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    // para limpiar la carpeta dist 
    output: {
        clean: true,
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },
            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use: ['style-loader', 'css-loader']

            },
            {
                test: /styles.css$/,
                use: [MiniCssExtract.loader, 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader'
            }
        ]
    },

    optimization: {},

    plugins: [
        new HtmhlWebpackPlugin({
            title: 'Mi webpack App',
            // filename: 'holamundo.html',
            //PA DECIRLE DE QUE ARCHIVO SE VA A BASAR PARA QUE COPIE TODAS SUSETIQUETAS
            template: './src/index.html'
        }),
        new MiniCssExtract({
            // solo cambiara el hash siii se hacen cambiosen el archivo
            filename: '[name].css',
            // filename: 'estilos.css',
            ignoreOrder: false,
        })
    ],
}