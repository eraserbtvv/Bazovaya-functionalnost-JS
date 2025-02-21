const path = require('path')

module.exports = {
    entry: {
        main: path.resolve(__dirname, '/scripts/script.js'),
    },
};

module.exports = {
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
};
