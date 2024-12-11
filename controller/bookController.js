const BookModel = require('../model/bookModel');
const userModel = require('../model/userModel');

exports.createBook = async (req, res) => {
  try {
    const getUser = await userModel.findById(req.params.userID);
    const { name, description, category } = req.body;

    if (!name && !description && !category) {
      return res.status(400).json({
        message: 'all fields must be filled',
      });
    } else if (!name) {
      return res.status(400).json({
        message: 'Please enter the book name',
      });
    } else if (!description) {
      return res.status(400).json({
        message: 'Please enter the description',
      });
    } else if (!category) {
      return res.status(400).json({
        message: 'Please enter the category',
      });
    } else if (!name || !description || !category) {
      return res.status(400).json({
        message: 'Please enter the valid info',
      });
    }
    const newBook = await BookModel.create({
      name,
      description,
      category,
    });
    //referencing a user to a book
    await getUser.Books.push(newBook._id);
    await getUser.save();
    return res.status(201).json({
      message: 'Book created',
      data: newBook,
    });
  } catch (error) {
    console.error('unable to create a book', error);
  }
};

//Get by name
exports.getOneByName = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(404).json({
        message: 'Please enter a book name',
      });
    }
    const books = await BookModel.findOne({ name });
    return res.status(200).json({
      message: 'Book found',
      data: books,
    });
  } catch (error) {
    return res.status(400).json({
      message: "couldn't find your book",
      error,
    });
  }
};

// /get-one-book/:id
exports.getOneById = async (req, res) => {
  try {
    const book = await BookModel.findById(req.params.id).populate({
      path: 'Books',
    });
    return res.status(200).json({
      message: 'Cart item',
      data: book,
    });
  } catch (error) {
    return res.status(400).json({
      message: 'Cart item not found',
      error,
    });
  }
};

//update method
exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { category, name } = req.body;
    const update = await BookModel.findByIdAndUpdate(
      id,
      { category, name },
      { new: true }
    );
    //const update = await UserModel.findByIdAndUpdate(req.params.id, req.body.category, {new:true})
    return res.status(202).json({
      message: 'updated',
      data: update,
    });
  } catch (error) {
    return res.status(400).json({
      message: 'failed to update book',
      error,
    });
  }
};

//delete method
exports.deleteBook = async (req, res) => {
  try {
    const removeBook = await BookModel.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      message: 'book deleted',
      data: removeBook,
    });
  } catch (error) {
    return res.status(400).json({
      message: "couldn't delete book",
      error,
    });
  }
};
