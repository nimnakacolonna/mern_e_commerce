import data from "../data.js";
import Product from "../models/productModel.js";
import express from 'express';
import User from '../models/userModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req,res) => {
    await Product.deleteMany({});
    const createdproducts = await Product.insertMany(data.products);
    await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdProducts, createdUsers });
});

export default seedRouter;