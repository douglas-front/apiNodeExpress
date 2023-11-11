const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: { type: String, required: true },
    file: { type: String, required: false },
});

module.exports = mongoose.model("Product", ProductSchema);
