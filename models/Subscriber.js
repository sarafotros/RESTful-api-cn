const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

const subscriberSchema =  new Schema({
    username: {
        type: String,
        required: true,
        min: 1,
        max:15,
        unique:true,
    },
    password:{
        type: String,
        required:true,
        select: false,
        bcrypt: true,
    },
    subscriber:{
        type: Boolean,
        default: true,
    },
    plants: [{type: mongoose.Schema.Types.ObjectId, ref: 'Plants'}],
})

subscriberSchema.pre('save', function(next){
    if(!this.isModified('password'))
        return next()
    bcrypt.hash(this.password, 10, (err, hashedPassword)=>{
        if(err)
            return next(err)
            this.password = hashedPassword
            next()
    })
})

const Subscriber =  (module.exports = mongoose.model('Subscriber', subscriberSchema))


module.exports.insertPlants = function (subscriber, plant){
    return Subscriber.findByIdAndUpdate({username: subscriber}, {$push:{plants:plant}}, {new:true})
}
