const ShopModel = require('../model/shopModel');
const userModel = require('../model/userModel');

// /upload-products
exports.createProducts = async (req, res) => {
  try {
    const getUser = await userModel.findById(req.params.userID);
    const { productName, price, availability, category } = req.body;

    // if ((!productName, !price && !availability && !category)) {
    //   return res.status(400).json({
    //     message: 'All fields must be filled',
    //   });
    // } else if (!productName) {
    //   return res.status(400).json({
    //     message: 'Enter the amount',
    //   });
    // } else if (!price) {
    //   return res.status(400).json({
    //     message: 'Enter the amount',
    //   });
    // } else if (!availability) {
    //   return res.status(400).json({
    //     message: 'Stork has ran out',
    //   });
    // } else if (!category) {
    //   return res.status(400).json({
    //     message: 'Enter the category',
    //   });
    // } else if (!price || !availability || !category) {
    //   return res.status(400).json({
    //     message: 'All fields must be filled',
    //   });
    // }
    const newProduct = await ShopModel.create({
      productName,
      price,
      availability,
      category,
    });
    //referencing a user to a product
    await getUser.Products.push(newProduct._id);
    await getUser.save();

    return res.status(201).json({
      message: 'order added to your shopping cart',
      data: newProduct,
    });
  } catch (error) {
    console.error('unable to place your order');
  }
};

// /get-all-products,
exports.getAll = async (req, res) => {
  try {
    const products = await ShopModel.find();
    return res.status(201).json({
      message: 'Total cart items',
      data: products,
    });
  } catch (error) {
    return res.status(400).json({
      message: 'Cart items not found',
      error,
    });
  }
};
// /get-one-product/:id
exports.getOneById = async (req, res) => {
  try {
    const product = await ShopModel.findById(req.params.id).populate({
      path: 'Products',
    });
    return res.status(200).json({
      message: 'Cart item',
      data: product,
    });
  } catch (error) {
    return res.status(400).json({
      message: 'Cart item not found',
      error,
    });
  }
};
// /update-product
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { productName, availability, category } = req.body;
    const update = await ShopModel.findByIdAndUpdate(
      id,
      {
        productName,
        availability,
        category,
      },
      { new: true }
    );
    return res.status(202).json({
      message: 'Cart item updated',
      data: update,
    });
  } catch (error) {
    return res.status(400).json({
      message: 'failed to update cart item',
      error,
    });
  }
};
// /delete-products
exports.getOneAndDelete = async (req, res) => {
  try {
    const { productName } = req.body;
    const product = await ShopModel.findOneAndDelete({ productName });
    return res.status(200).json({
      message: 'user deleted',
      data: product,
    });
  } catch (error) {
    return res.status(400).json({
      message: 'failed to delete cart product',
      error,
    });
  }
};
