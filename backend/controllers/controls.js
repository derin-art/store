const Item = require("../modules/itemSchema.js")



const getAllitems = async(req, res, next)=>{
    try{
        const items = await Item.find({})
        if(!items){
            return res
            .status(404)
            .json({msg: "unsuccesful", data: "no data"})
        }
        res
        .status(200)
        .json({msg: "successful", data: items})
    }
    catch(err){
        res
        .status(500)
        .json({msg: "unsuccesful", data: err})
    }
    

}

const getSingleItem = async(req, res, next)=>{
    try{
        const {id} = req.params
        const item = await Item.findOne({_id: id})
        if(!item){
            return res
            .status(404)
            .json({msg: "unsuccesful", data: "item does not exist"})
        }
        res
        .status(200)
        .json({msg: "succesful", data: item})
    }
    catch(err){
        res
        .status(500)
        .json({msg: "unsuccesful", data: err})
    }
}

const createItems = async(req, res, next)=>{
    try{
        const item = await Item.create({
            name: req.body.name,
            price: req.body.price,
            img: req.file.path
        })
        res
        .status(200)
        .json({msg: "successful", data: item})
    }
    catch(err){
        res
        .status(500)
        .send(err)
    }
}


module.exports = {getAllitems, createItems, getSingleItem}





