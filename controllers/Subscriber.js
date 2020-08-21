const Subscriber = require('../models/Subscriber')

exports.addSubscriber = function(req, res, next) {
    const {username , password} = req.body

    Subscriber.findOne({username}, (err, subscriber)=>{
        if(err) return next(err);
        if(subscriber){
         res.status(400).json({message:{ msgBody: 'Username is already taken', msgError:true}})
        }else {
            const newSubscriber = new Subscriber({username, password})

            newSubscriber.save(err=>{
                if(err) return next(err)
                else{
                    console.log(newSubscriber.password)
                    res.status(201).json({message:{ msgBody:"Subscriber successfully created!",
                    msgError: false }});
                }
            })
        }
    })
}