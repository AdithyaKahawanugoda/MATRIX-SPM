const express = require("express");
const router = express.Router();
const { addRailwayCost } = require("../controllers/deliveryManager-controller");
const { getCost } = require("../controllers/deliveryManager-controller");
const {
  editRailwayCost,
  deleteRailwayCost,
  editRetailCost,
  editBulkCost,
  editprecentage,
  addcategory,
  deleteCategory,
  getAllCategory,
  editCategory,
  addQA,
  deleteQA,
  editQA,
} = require("../controllers/deliveryManager-controller");

//delivery cost
router.route("/addrailway").put(addRailwayCost);
router.route("/editrailway").put(editRailwayCost);
router.route("/getcost").get(getCost);
router.route("/deleterailway").put(deleteRailwayCost);
router.route("/editretail").put(editRetailCost);
router.route("/editbulk").put(editBulkCost);
router.route("/editprecentage").put(editprecentage);
//FAQ
router.route("/addcategory").post(addcategory);
router.route("/removecategory").delete(deleteCategory);
router.route("/getallcategory").get(getAllCategory);
router.route("/editcategory").put(editCategory);
router.route("/addqa").put(addQA);
router.route("/deleteqa").put(deleteQA);
router.route("/editQA").put(editQA);

module.exports = router;
