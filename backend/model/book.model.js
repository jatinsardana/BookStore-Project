const mongoose = require("mongoose")
// import { number, string } from "zod"

const bookSchema = mongoose.Schema({
  name: { type: String, required: true },
  year: { type: Number, required: true },
  author: { type: String, required: true },
  language: { type: String, required: true }
})

const Book = mongoose.model("Book" , bookSchema)

module.exports = Book;