const express = require("express")
const multer = require("multer")
require("express-async-errors")
const storage = multer.diskStorage({
    destination:function(req, file, cb){
       cb(null, "./uploads/")
    },
    filename: function(req, file, cb){
        cb(null, file.originalname)
    }
})


const fileFilter =(req, file, cb)=>{
    if(file.mimetype === "image/jpeg" || file.mimetype === "image/png"){
        cb(null, true)
        
    }
    else{
        cb(new Error("the file type is wrong"), false)
    }
 
   
}

const uploads = multer({storage: storage, limits:{ fileSize: 1024 * 1024 * 4}, fileFilter: fileFilter})

const {getAllitems, createItems, getSingleItem, deleteItem, editItem } = require("../controllers/controls.js")
const {createUser, verifyUser, getAllUsers} = require("../Authorization/Auth.js")

const router = express.Router()
router.route("/users").get(getAllUsers)
router.route("/users/login").post(verifyUser)
router.route("/users").post(createUser)
router.route("/storeV1").get(getAllitems).post(uploads.single("productImage"),createItems)
router.route("/storeV1/:id").get(getSingleItem).delete(deleteItem).patch(uploads.single("productImage"),editItem)



module.exports = router