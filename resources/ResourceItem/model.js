const mongoose = require('mongoose');

module.exports = mongoose.model('ResourceItem', {
    brand: {type: String},
    model: {type: String},
    addedOn: {type: Date, default: Date.now, setDefaultsOnInsert: true}
});