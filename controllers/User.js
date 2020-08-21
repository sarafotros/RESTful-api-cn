const User = require('../models/User')

exports.addUser = function(req, res, next) {
    const {username , password} = req.body
    User.findOne({username}, (err, user)=>{
        if(err) return next(err);
        if(user)
        res.status(400).json({message:{ msgBody: 'Username is already taken', msgError:true}})
        else {
            const newUser = new User({username, password})

            newUser.save(err=>{
                if(err) return next(err)
                else{
                    console.log(newUser.password)
                    res.status(201).json({message:{ msgBody:"User successfully create",
                    msgError: false }});
                }
            })
        }
    })
}


exports.index = function (req, res , next){
    User.get(function (err, users){
        if(err) return next(err)
        res.json({
            status: "success",
            message:"User retrieved",
            data: users
        })
    })
}