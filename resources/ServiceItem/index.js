const {service: parent} = require('../parents');
const model = require('./model');
const AdminBro = require('admin-bro');

module.exports = {
    resource: model,
    options: {
        parent,
        actions: {edit: {isAccessible: false}, delete: {isAccessible: false}},
        properties: {
            url: {
                isVisible: {list: true, filter: false, show: false, edit: false},
                components: {
                    list: AdminBro.bundle('./Components/url.jsx')
                }
            }
        }
    }
};