const express = require("express");
const router = express.Router();

// route code
const {
    getBookRequests,
} = require("../controllers/admin-controller");


router.route("/getBookRequests").get(getBookRequests);

module.exports = router;
