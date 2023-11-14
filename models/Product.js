const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: { type: String, required: true },
    src: { type: String, required: true },
    extension: { type: String, required: true },
})

module.exports = mongoose.model("products", ProductSchema);
