const InventoryManagerModel = require("../models/inventoryManger-model");
const ProductModel = require("../models/product-model");
const InvoiceModel = require("../models/invoice-model");
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
    category,
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
        category,
        license,
        print: { quantity, edition },
        inStockQuantity: quantity,
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

// get all books
exports.getAllBooks = async (req, res) => {
  try {
    const allBooks = await ProductModel.find();
    res.status(200).send({
      allBooks,
    });
  } catch (error) {
    res.status(500).json({
      error,
      desc: "Error occurred in getAllBooks",
    });
  }
};

// get specific book
exports.getBookByISBN = async (req, res) => {
  const { ISBN } = req.body;
  try {
    const book = await ProductModel.findOne({ ISBN });
    res.status(200).send({
      book,
    });
  } catch (error) {
    res.status(500).json({
      error,
      desc: "Error occurred in getBookByISBN",
    });
  }
};

// update specific book
exports.updateBookByISBN = async (req, res) => {
  const {
    publishingTitle,
    originalTitle,
    translator,
    originalAuthor,
    aboutAuthor,
    aboutBook,
    ISBN,
    category,
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
  if (!publishingTitle) {
    publishingTitle = undefined;
  }
  if (!originalTitle) {
    originalTitle = undefined;
  }
  if (!translator) {
    translator = undefined;
  }
  if (!originalAuthor) {
    originalAuthor = undefined;
  }
  if (!aboutAuthor) {
    aboutAuthor = undefined;
  }
  if (!aboutBook) {
    aboutBook = undefined;
  }
  if (!license) {
    license = undefined;
  }
  if (!quantity) {
    quantity = undefined;
  }
  if (!edition) {
    edition = undefined;
  }
  if (!translatorContact) {
    translatorContact = undefined;
  }
  if (!category) {
    category = undefined;
  }
  if (!translatorEmail) {
    translatorEmail = undefined;
  }
  if (!press) {
    press = undefined;
  }
  if (!proofReader) {
    proofReader = undefined;
  }
  if (!coverDesigner) {
    coverDesigner = undefined;
  }
  if (!typeSetter) {
    typeSetter = undefined;
  }
  if (!weight) {
    weight = undefined;
  }
  if (!marketPrice) {
    marketPrice = undefined;
  }
  if (!coverCost) {
    coverCost = undefined;
  }
  if (!licenseCost) {
    licenseCost = undefined;
  }
  if (!writerPayment) {
    writerPayment = undefined;
  }
  if (!proofReadingPayment) {
    proofReadingPayment = undefined;
  }
  if (!typeSetterPayment) {
    typeSetterPayment = undefined;
  }
  if (!printCost) {
    printCost = undefined;
  }
  if (!encImg) {
    encImg = undefined;
  }
  if (encImg) {
    const uploadRes = await uploadFiles(encImg, "Book_Covers");
  }
  try {
    const updatedBook = await ProductModel.findOneAndUpdate(
      { ISBN },
      {
        $set: {
          publishingTitle,
          originalTitle,
          translator,
          originalAuthor,
          aboutAuthor,
          aboutBook,
          ISBN,
          category,
          license,
          print: { quantity, edition },
          inStockQuantity: quantity,
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
        },
      },
      {
        new: true,
        upsert: false,
        omitUndefined: true,
      }
    );
    res.status(200).send({
      desc: "Book data updated successfully",
      updatedBook,
    });
  } catch (error) {
    res.status(500).json({
      error,
      desc: "Error occurred in updateBookByISBN",
    });
  }
};

// delete specific book
exports.deleteBookByISBN = async (req, res) => {
  const { ISBN } = req.body;
  try {
    await ProductModel.deleteOne({ ISBN });
    res.status(202).json({ desc: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({
      error,
      desc: "Error occurred in deleteBookByISBN",
    });
  }
};

// create ledger report

// add new bulk order invoice
exports.addNewInvoice = async (req, res) => {
  const { invoiceId, retailShop, totalAmount, notes, items } = req.body;
  try {
    const existingInvoice = await findInvoiceByID(invoiceId, res);
    if (existingInvoice) {
      res.status(400).json({
        desc: "Invoice already exist - Please check again",
      });
    } else {
      const newInvoice = await InvoiceModel.create({
        invoiceId,
        retailShop,
        payment: { totalAmount },
        notes,
        items,
      });
      res.status(201).json({
        newInvoice,
        desc: "New invoice added",
      });
    }
  } catch (error) {
    res.status(500).json({
      error,
      desc: "Error occurred in addNewInvoice",
    });
  }
};

// get all invoices
// get specific invoice
// update specific invoice
// delete specific invoice
// log deleted invoice details

// update profile details
// delete specific profile
// log profile delete details

// log deleted book details
// const logBookDeletes = async (ISBN, res) => {
//   try {
//     const deletedBookLog = await BookDeleteLogModel.create({
//       ISBN
//     })
//   } catch (error) {
//     res.status(422).json({
//       error,
//       desc: "Error occurred in logBookDeletes",
//     });
//   }
// };

// check ISBN duplicates
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

// check Invoice duplicates
const findInvoiceByID = async (invoiceId, res) => {
  try {
    const existingInvoice = await InvoiceModel.findOne({
      invoiceId: invoiceId,
    });
    return existingInvoice;
  } catch (error) {
    res.status(422).json({
      error,
      desc: "Error occurred in findInvoiceByID",
    });
  }
};

// manage file uploads
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

// manage file deletes
