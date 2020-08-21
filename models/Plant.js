const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const plantSchema = new Schema({
    name: {
        type: String,
        required: true,
        min: 1,
        max:30,
        unique:true,
    },
    type:{
        type: String,
        enum: ['bedding', 'outdoor', 'indoor'],
        required:true,
    },
    size:{
        type: String,
        enum: ['small', 'medium', 'large'],
        required:true
    }
})

const Plant = (module.exports = mongoose.model('Plant', userSchema))


module.exports.get = function (callback , limit){
    User.find(callback).limit(limit)
}