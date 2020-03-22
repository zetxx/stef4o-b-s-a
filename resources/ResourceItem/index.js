const {resource: parent} = require('../parents');
const model = require('./model');

module.exports = {
    resource: model,
    options: {
        parent,
        properties: {
            addedOn: {
                isVisible: false
            }
        }
    }
};