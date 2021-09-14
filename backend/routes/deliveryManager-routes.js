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
} = require("../controllers/deliveryManager-controller");

// route code
router.route("/addrailway").put(addRailwayCost);
router.route("/editrailway").put(editRailwayCost);
router.route("/getcost").get(getCost);
router.route("/deleterailway").put(deleteRailwayCost);

router.route("/editretail").put(editRetailCost);

router.route("/editbulk").put(editBulkCost);
router.route("/editprecentage").put(editprecentage);

module.exports = router;
