const express = require("express");
const router = express.Router();
const { protectedInventoryManager } = require("../middlewares/auth-middleware");
const {
  addNewBook,
  getAllBooks,
  deleteBookByISBN,
  getBookByISBN,
  updateBookByISBN,
} = require("../controllers/inventoryManager-controller");
// route code
router.route("/add-book").post(addNewBook);
router.route("/get-books").get(getAllBooks);
router.route("/delete-book").get(deleteBookByISBN);
router.route("/get-book").get(getBookByISBN);
router.route("/edit-book").put(updateBookByISBN);
module.exports = router;
