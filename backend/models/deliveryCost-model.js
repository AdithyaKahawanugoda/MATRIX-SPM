const mongoose = require("mongoose");

const DeliveryCostSchema = new mongoose.Schema({
  BulkExpressPrecentage: {
    type: Number,
    required: [true, "Please provide a Bulk Express Precentage"],
  },

  RetailExpressPrecentage: {
    type: Number,
    required: [true, "Please provide a Retail Express Precentage"],
  },

  RetailCost: [
    {
      ProvinceName: {
        type: String,
        required: [true, "Please provide a province"],
      },
      Cost: {
        type: Number,
        required: [true, "Please provide a cost"],
      },
    },
  ],

  BulkCost: [
    {
      StationName: {
        type: String,
        required: [true, "Please provide a station name"],
      },
      Cost: {
        type: Number,
        required: [true, "Please provide a cost"],
      },
    },
  ],
});

const DeliveryCost = mongoose.model("deliveryCost", DeliveryCostSchema);

module.exports = DeliveryCost;
