exports.createBook = async (req, res) => {
  try {
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
    return res.status(201).json({
      message: 'Book created',
      data: newBook,
    });
  } catch (error) {
    console.error('unable to create a book', error);
  }
};

//Get on by name
exports.getBookByName = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(404).json({
        message: 'Please enter a book name',
      });
    }
    const users = await BookModel.findOne({ name });
    return res.status(200).json({
      message: 'Book found',
      data: book,
    });
  } catch (error) {
    return res.status(400).json({
      message: "couldn't find your book",
      error,
    });
  }
};

//update method
exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { category, name } = req.body;
    const update = await userModel.findByIdAndUpdate(
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
    const removeBook = await userModel.findByIdAndDelete(req.params.id);
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
