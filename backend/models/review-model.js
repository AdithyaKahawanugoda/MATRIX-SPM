const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "products",
  },
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "customers",
  },
  comment: {
    type: String,
    required: true,
  },
});

const Review = mongoose.model("review", ReviewSchema);
module.exports = Review;
