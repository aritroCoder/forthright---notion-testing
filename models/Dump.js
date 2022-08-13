// mongoDB database model for data
const mongoose = require('mongoose');
const { Schema }= mongoose;


const dataDump = new Schema({
    data:{
        type: 'object',
        required: true,
    }
});

module.exports = mongoose.model('data', dataDump);