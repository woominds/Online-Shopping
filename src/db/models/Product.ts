import mongoose from '../Connection';

export const ProductSchema = new mongoose.Schema({
    id: {type: Number, required: false},
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    image: {type: String, required: true},
    category: {type: String, required: true},
    sexe_category: {type: String, required: false,
    }
});

const Product = mongoose.model('Product', ProductSchema);
export default Product;