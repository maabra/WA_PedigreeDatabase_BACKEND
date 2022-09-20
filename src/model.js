const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
    dogName: {
        required: true,
        type: String
    },
    dogSex: {
        required: true,
        type: String
    },
    dogBirth: {
        required: true,
        type: String
    },
    dogKennel: {
        required: true,
        type: String
    },
    dogCacib: {
        required: true,
        type: String
    },
    dogCac: {
        required: true,
        type: String
    },
    dogMother: {
        required: true,
        type: String
    },
    dogFather: {
        required: true,
        type: String
    },
    dogGrandmaMother: {
        required: true,
        type: String
    },
    dogGrandpaMother: {
        required: true,
        type: String
    },
    
    dogGrandmaFather: {
        required: true,
        type: String
    },
    
    dogGrandpaFather: {
        required: true,
        type: String
    },
    
    dogPedNr: {
        required: true,
        type: String
    },
})

module.exports = mongoose.model('dogs', dogSchema)