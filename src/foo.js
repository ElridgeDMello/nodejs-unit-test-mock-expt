var path = require('path'),
    myFsModule = require('./myFsModule');

module.exports.extnameAllCaps = function (file) {
    return path.extname(file).toUpperCase();
};

module.exports.basenameAllCaps = function (file) {
    return path.basename(file).toUpperCase();
};