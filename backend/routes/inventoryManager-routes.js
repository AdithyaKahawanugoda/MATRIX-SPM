const express = require("express");
const router = express.Router();
const { protectedInventoryManager } = require("../middlewares/auth-middleware");
const {
  addNewBook,
  getAllBooks,
  deleteBookByISBN,
  getBookByISBN,
  updateBookByISBN,
  addNewInvoice,
} = require("../controllers/inventoryManager-controller");
// books
router.route("/add-book").post(addNewBook);
router.route("/get-books").get(getAllBooks);
router.route("/get-book").get(getBookByISBN);
router.route("/delete-book").delete(deleteBookByISBN);
router.route("/edit-book").put(updateBookByISBN);
// invoices
router.route("/add-invoice").post(addNewInvoice);
module.exports = router;
