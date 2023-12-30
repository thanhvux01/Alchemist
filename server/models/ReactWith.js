const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReactWith = new Schema({
    result:{
        type: Object,
    },
    symbolReact:{
        type: Object,
    }    
});

//module.exports = mongoose.model('reactWith', ReactWithSchema);