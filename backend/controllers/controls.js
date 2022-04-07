const Item = require("../modules/itemSchema.js")
require("express-async-errors")
const CustomError = require('../CutomError/CustomError')


const getAllitems = async(req, res, next)=>{
    const items = await Item.find({})
  
    if(!items){
        throw new CustomError("Unsuccessful data", 404)
    }

    res.status(200).json({msg: "successful", data: items})

}


const deleteItem = async(req, res, next)=>{
    
        const {id: itemID} = req.params
        const item = await Item.findOneAndDelete({_id: itemID})
        if(!item){
            throw new CustomError(`The item of id ${itemID} doesn't exist`, 404)
        }
        res
        .status(200)
        .json({msg: "success", data: item})
    
 
}

const getSingleItem = async(req, res, next)=>{
   
        const {id} = req.params
        const item = await Item.findOne({_id: id})
        if(!item){
            throw new CustomError(`The item of id ${id} doesn't exist`, 404)
        }
        res
        .status(200)
        .json({msg: "succesful", data: item})
  
}

const createItems = async(req, res, next)=>{

        const item = await Item.create({
            name: req.body.name,
            price: req.body.price,
            img: req.file.path
        })
        res
        .status(200)
        .json({msg: "successful", data: item})
   
}

const editItem = async(req, res, next)=>{
    
        const {id} = req.params
        const {name, price} = req.body
        const productImage = req.file.path
        const item = await Item.findOneAndUpdate({_id: id}, {name, price, img: productImage}, {new: true, runValidators: true})
        if(!item){

            throw new CustomError(`The item of id ${id} doesn't exist`, 404)
        }
        res
        .status(200)
        .json({msg: "success", data: item})
   
   

}

module.exports = {getAllitems, createItems, getSingleItem, deleteItem, editItem}





