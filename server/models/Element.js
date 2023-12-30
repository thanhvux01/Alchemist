const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ElementSchema = new Schema({
    number:{
        type: Number,
        required: true,
        unique: true
    },
    symbol:{
        type: String,
        require: true
    },
    name:{
        type: String,
        required: true,
        unique: true
    },
    mass:{
        type: Number,
        require: true
    },
    electronConfiguration: {
        type: String,
    },
    electroneGativity:{
        type: Number,
    },
    atomicRadius:{
        type: Number,
    },
    ionizationEnergy:{
        type: Number,
    },
    electronAffinity:{
        type: Number,
    },
    oxidationStates:{
        type: Array,
    },
    standardState:{
        type: String,
    },
    meltingPoint:{
        type: Number,
    },
    boilingPoint:{
        type: Number,
    },
    density:{
        type: Number,
    },
    category: {
        type: String,
    },
    yearDiscovered:{
        type: String,
    },
    picture:{
        type: String,
    }
    // reactWith:[
    //     ReactWith
    // ]
});

module.exports = mongoose.model('element', ElementSchema);