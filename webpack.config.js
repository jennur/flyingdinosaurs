var path = require("path");
var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");
var config = {
    entry: SRC_DIR + "/app/index.js",
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
            }
            /*
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            }*/
        ]
    }
};
module.exports = config;