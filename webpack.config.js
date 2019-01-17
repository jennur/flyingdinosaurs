var path = require("path");
var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

module.exports = {
    mode: 'production',
    entry: { 
        main: [ SRC_DIR + "/index.js", SRC_DIR + "/resources/css/main.css"] 
    },
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                include: SRC_DIR,
                
                // these are matching conditions, each accepting a regular expression or string
                // test and include have the same behavior, both must be matched
                // exclude must not be matched (takes preference over test and include)
                // Best practices:
                // - Use RegExp only in test and for filename matching
                // - Use arrays of absolute paths in include and exclude
                // - Try to avoid exclude and prefer include
                
                // flags to apply these rules, even if they are overridden (advanced option)
                loader: "babel-loader",
                // the loader which should be applied, it'll be resolved relative to the context
                // -loader suffix is no longer optional in webpack2 for clarity reasons
                // see webpack 1 upgrade guide
                query: {
                  presets: ["react", "es2015", "stage-2"]
                }
            },
            {
                include: SRC_DIR,
                test: /\.css?$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};
