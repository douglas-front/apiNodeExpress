const express = require("express")
const router = express.Router()

const upload = require("../config/multer")

const ProductController = require("../controllers/productController")

router.post("https://api-node-express-nine.vercel.app/", upload.single("file"), ProductController.create)
router.get("https://api-node-express-nine.vercel.app/", ProductController.findAll)
router.delete("https://api-node-express-nine.vercel.app/:id", ProductController.remove)

module.exports = router
