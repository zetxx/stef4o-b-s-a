const mongoose = require('mongoose');
const {Schema} = mongoose;

module.exports = mongoose.model('ServiceItem', {
    resourceItemId: {
        type: Schema.Types.ObjectId, ref: 'ResourceItem'
    }
});