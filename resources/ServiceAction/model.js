const mongoose = require('mongoose');
const {Schema} = mongoose;

module.exports = mongoose.model('ServiceAction', {
    serviceItemId: {
        type: Schema.Types.ObjectId, ref: 'ServiceItem'
    },
    description: String,
    addedOn: {type: Date, default: Date.now, setDefaultsOnInsert: true}
});