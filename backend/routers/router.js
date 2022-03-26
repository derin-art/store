const express = require("express")
const multer = require("multer")
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

const {getAllitems, createItems, getSingleItem} = require("../controllers/controls.js")

const router = express.Router()

router.route("/").get(getAllitems).post(uploads.single("productImage"),createItems)
router.route("/:id").get(getSingleItem)



module.exports = router