const path = require( "path" );
const HTML = require( "html-webpack-plugin" );

const Webpack = (env) => ({
    entry: path.resolve( "src", "index.tsx" ),
    output: { path: path.resolve( "dist" ), filename: "index.bundler.js" },
    resolve: { extensions: [ ".js", ".jsx", ".ts", ".tsx", ".css", ".scss", ".json" ] },
    devServer: { port: 8000 },
    module: { rules: [
        { test: /\.(js|ts)x?$/, exclude: /node_modules/, use: "babel-loader" },
        { test: /\.(css|scss)$/, use: [ "style-loader", "css-loader", "sass-loader" ] },
        { test: /\.(html)$/, use: "html-loader" }
    ]},
    plugins: [ new HTML({ template: path.resolve( "public", "index.html" ) }) ]
});

module.exports = Webpack;