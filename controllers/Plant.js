const Plant = require('../models/Plant')

exports.addPlant = function(req, res, next){
    const {name, type, size} = req.body

    Plant.findOne({name}, (err, plant) => {
        if(err) return next(err);
        if(plant){
            res.status(400).json({message: { msgBody: 'Plant is already exist', msgError:true}})
        }else{
            const newPlant = new Plant({name, type, size})

            
            newPlant.save(err=>{
                if(err) return next(err)
                else{
                    res.status(201).json({message:{ msgBody:"plant added",
                    msgError: false }});
                }
            })
        }

    })

}

exports.indexPlant = function (req, res , next){
    Plant.get(function (err, plants){
        if(err) return next(err)
        res.json({
            status: "success",
            message:"Plant retrieved",
            data: plants
        })
    })
}