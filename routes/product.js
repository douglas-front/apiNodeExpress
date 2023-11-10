const express = require("express")
const router = express.Router()

const upload = require("../config/multer")

const ProductController = require("../controllers/productController")

console.log("/product route has connected")

router.post("/", upload.single("file"), ProductController.create)
router.get("/", ProductController.findAll)
router.delete("/:id", ProductController.remove)

module.exports = router
