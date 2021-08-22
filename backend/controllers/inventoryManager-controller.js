const InventoryManagerModel = require("../models/inventoryManger-model");
const ProductModel = require("../models/product-model");
const { cloudinary } = require("../utils/cloudinary");

// add new book

exports.addNewBook = async (req, res) => {
  const {
    publishingTitle,
    originalTitle,
    translator,
    originalAuthor,
    aboutAuthor,
    aboutBook,
    ISBN,
    license,
    quantity,
    edition,
    translatorContact,
    translatorEmail,
    press,
    proofReader,
    coverDesigner,
    typeSetter,
    weight,
    marketPrice,
    coverCost,
    licenseCost,
    writerPayment,
    proofReadingPayment,
    typeSetterPayment,
    printCost,
    encImg,
  } = req.body;

  try {
    const existingBook = await findBookByISBN(ISBN, res);
    if (existingBook) {
      res.status(400).json({
        desc: "Book already exist - Please check again",
      });
    } else {
      const uploadRes = await uploadFiles(encImg, "Book_Covers");
      const newBook = await ProductModel.create({
        publishingTitle,
        originalTitle,
        translator,
        originalAuthor,
        aboutAuthor,
        aboutBook,
        ISBN,
        license,
        print: { quantity, edition },
        translatorContact,
        translatorEmail,
        press,
        proofReader,
        coverDesigner,
        typeSetter,
        weight,
        marketPrice,
        bookImage: {
          imagePublicId: uploadRes.public_id,
          imageSecURL: uploadRes.secure_url,
        },
        charges: {
          coverCost,
          licenseCost,
          writerPayment,
          proofReadingPayment,
          typeSetterPayment,
          printCost,
        },
      });
      res.status(201).json({
        newBook,
        desc: "New book added",
      });
    }
  } catch (error) {
    res.status(500).json({
      error,
      desc: "Error occurred in addNewBook",
    });
  }
};

const findBookByISBN = async (ISBN, res) => {
  try {
    const existingBook = await ProductModel.findOne({ ISBN: ISBN });
    return existingBook;
  } catch (error) {
    res.status(422).json({
      error,
      desc: "Error occurred in findBookByISBN",
    });
  }
};

const uploadFiles = async (file, preSetName) => {
  try {
    const uploadResponse = await cloudinary.uploader.upload(file, {
      upload_preset: preSetName,
    });
    return uploadResponse;
  } catch (error) {
    res.status(500).json({
      error,
      desc: "Error occurred in uploadFiles",
    });
  }
};
