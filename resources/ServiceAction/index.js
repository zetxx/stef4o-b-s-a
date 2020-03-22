const {service: parent} = require('../parents');
const model = require('./model');

module.exports = {
    resource: model,
    options: {
        parent,
        actions: {edit: {isAccessible: false}, delete: {isAccessible: false}},
        properties: {
            serviceItemId: {
                isVisible: {list: true, filter: true, show: true, edit: true}
            },
            description: {type: 'richtext'}
        }
    }
};