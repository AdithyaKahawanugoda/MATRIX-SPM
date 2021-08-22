const express = require("express");
const router = express.Router();
const { protectedInventoryManager } = require("../middlewares/auth-middleware");
const { addNewBook } = require("../controllers/inventoryManager-controller");
// route code
router.route("/addbook").post(addNewBook);
module.exports = router;
