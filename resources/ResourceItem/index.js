const {resource: parent} = require('../parents');
const model = require('./model');

module.exports = {
    resource: model,
    options: {
        parent
    }
};