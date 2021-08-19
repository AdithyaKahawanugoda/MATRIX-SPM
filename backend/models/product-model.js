const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  publishingTitle: {
    type: String,
    required: true,
  },
  originalTitle: {
    type: String,
    required: true,
  },
  translator: {
    type: String,
    required: false,
  },
  originalAuthor: {
    type: String,
    required: false,
  },
  aboutAuthor: {
    type: String,
    required: false,
  },
  aboutBook: {
    type: String,
    required: false,
  },
  ISBN: {
    type: String,
    required: true,
    unique: true,
  },
  license: {
    type: String,
    required: false,
  },
  print: [
    {
      quantity: {
        type: Number,
        required: false,
      },
      edition: {
        type: Number,
        required: false,
      },
    },
  ],
  translatorContact: {
    type: String,
    required: false,
  },
  press: {
    type: String,
    required: false,
  },
  proofReader: {
    type: String,
    required: false,
  },
  coverDesigner: {
    type: String,
    required: false,
  },
  typeSetter: {
    type: String,
    required: false,
  },
  weight: {
    type: Number,
    required: true,
  },
  bookImage: {
    imagePublicId: {
      type: String,
      required: [
        true,
        "Error with Cloudinary service! Can not find the paper URL.",
      ],
    },
    imageSecURL: {
      type: String,
      required: [
        true,
        "Error with Cloudinary service! Can not find the paper URL.",
      ],
    },
  },
  marketPrice: {
    type: Number,
    required: false,
  },
  discountPercentage: {
    regular: { type: Number, default: 0 },
    bulk: { type: Number, default: 0 },
    label: { type: String },
  },
  charges: {
    coverCost: {
      type: Number,
      required: false,
    },
    licenseCost: Number,
    writerPayment: Number,
    proofReadingPayment: {
      type: Number,
      required: false,
    },
    typeSetterPayment: Number,
    printCost: {
      type: Number,
      required: false,
    },
    other: Number,
  },
  ratings: [
    {
      customerID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "customers",
      },
      ratingAmount: { type: Number },
    },
  ],
  addDate: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("product", ProductSchema);

module.exports = Product;
