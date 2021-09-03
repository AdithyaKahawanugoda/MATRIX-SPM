const express = require("express");
const router = express.Router();
const { addRailwayCost } = require("../controllers/deliveryManager-controller");
const { getRailwayCost } = require("../controllers/deliveryManager-controller");
const {
  editRailwayCost,
  deleteRailwayCost,
} = require("../controllers/deliveryManager-controller");

// route code
router.route("/addrailway").put(addRailwayCost);
router.route("/editrailway").put(editRailwayCost);
router.route("/getrailway").get(getRailwayCost);
router.route("/deleterailway").put(deleteRailwayCost);

// router.route("/add").post(addNewRailwayCost);

module.exports = router;
