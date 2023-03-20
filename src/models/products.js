import mongoose from "mongoose";
const productSchema = mongoose.Schema({
    name: String,
    price: Number,
});

export default mongoose.model("Product", productSchema);