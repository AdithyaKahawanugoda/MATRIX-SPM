const express = require("express");
const router = express.Router();
const { protectedInventoryManager } = require("../middlewares/auth-middleware");
const {
  addNewBook,
  getAllBooks,
  deleteBook,
} = require("../controllers/inventoryManager-controller");
// route code
router.route("/addbook").post(addNewBook);
router.route("/getbooks").get(getAllBooks);
router.route("/deleteBook").get(deleteBook);
module.exports = router;
