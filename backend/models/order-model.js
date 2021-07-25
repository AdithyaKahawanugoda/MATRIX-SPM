const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  buyerID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "customers",
  },
  billAmount: {
    type: Number,
    required: true,
  },
  deliveryAddress: {
    type: String,
    required: true,
  },
  deliveryFee: {
    type: Number,
    required: true,
  },
  purchasedDate: {
    type: Date,
    default: Date.now,
  },
  deliveryStatus: [
    {
      status: {
        type: String,
        default: "pending",
      },
      updatedTime: {
        type: Date,
        default: Date.now,
      },
    },
  ],

  orderData: [
    {
      productID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "products",
      },
      quantity: {
        type: Number,
        required: true,
      },
      discount: {
        type: Number,
        default: 0,
      },
    },
  ],
});

const Order = mongoose.model("order", OrderSchema);
module.exports = Order;
