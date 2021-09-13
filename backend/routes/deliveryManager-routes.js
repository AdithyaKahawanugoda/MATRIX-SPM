const express = require("express");
const router = express.Router();
const { addRailwayCost } = require("../controllers/deliveryManager-controller");
const { getRailwayCost } = require("../controllers/deliveryManager-controller");
const {
  editRailwayCost,
  deleteRailwayCost,
  getRetailCost,
  editRetailCost,
  getBulkCost,
  editBulkCost,
} = require("../controllers/deliveryManager-controller");

// route code
router.route("/addrailway").put(addRailwayCost);
router.route("/editrailway").put(editRailwayCost);
router.route("/getrailway").get(getRailwayCost);
router.route("/deleterailway").put(deleteRailwayCost);

router.route("/getretail").get(getRetailCost);
router.route("/editretail").put(editRetailCost);

router.route("/getbulk").get(getBulkCost);
router.route("/editbulk").put(editBulkCost);

module.exports = router;
