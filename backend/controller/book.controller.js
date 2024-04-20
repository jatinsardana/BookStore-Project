const Book = require("../model/book.model");

const getBook = async (req, res) => {
    const book = await Book.find();
    res.status(200).json(book);
};

module.exports = getBook;