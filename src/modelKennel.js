const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const kennelSchema = new mongoose.Schema({
    nameKennel: {
        required: true,
        type: String
    },
    firstLitter: {
        required: true,
        type: String
    },
    lastLitter: {
        required: true,
        type: String
    },
    ownerKennel: {
        required: true,
        type: String
    },
    dogs: [{
        type: ObjectId,
        ref: 'dogs'
      }],
})

module.exports = mongoose.model('breeders', kennelSchema)