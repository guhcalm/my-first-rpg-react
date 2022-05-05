import path from 'path';
import html from 'html-webpack-plugin';

const config = (env) => ({
    entry: path.resolve( 'src', 'index.tsx' ),
    output: { path: path.resolve( 'dist' ), filename: 'index.bundle.js' },
    mode: env.WEBPACK_BUILD ? 'production' : 'development',
    resolve: { extensions: [ '.js', '.jsx', '.ts', '.tsx', '.css', '.scss', '.json' ] },
    devServer: { port: 8000 },
    module: { rules: [
        { test: /\.(js|ts)x?$/, exclude: /node_modules/, use: 'babel-loader' },
        { test: /\.(css|scss)$/, use: [ 'style-loader', 'css-loader', 'sass-loader' ] },
        { test: /\.(html)$/, use: 'html-loader' }
    ]},
    plugins: [new html({ template: path.resolve( 'public', 'index.html' ) })]
});

export default config;