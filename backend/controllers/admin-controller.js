const AdminModel = require("../models/admin-model");
const RequestBook = require("../models/requestBook-model");

exports.getBookRequests = async (req, res) => {
    try {
      const bookRequests = await RequestBook.find();
      res.status(200).send({ bookRequests: bookRequests });
    } catch (error) {
      res.status(500).json({
        success: false,
        desc: "Error in fetching book requests -" + err,
      });
    }
  };