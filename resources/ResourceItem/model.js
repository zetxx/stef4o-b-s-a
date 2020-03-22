const mongoose = require('mongoose');

module.exports = mongoose.model('ResourceItem', {
    brand: {type: String},
    model: {type: String}
});