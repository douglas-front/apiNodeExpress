const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: { type: String, required: true },
    // src: { type: String },
});

module.exports = mongoose.model("Product", ProductSchema);
