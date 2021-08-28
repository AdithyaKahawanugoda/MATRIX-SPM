const AdminModel = require("../models/admin-model");
const NewsletterModal = require("../models/newsletter-model");
const ProductModel = require("../models/product-model");
const RequestBook = require("../models/requestBook-model");
const { cloudinary } = require("../utils/cloudinary");

//Newsletter Management

exports.createNewsletter = async (req, res) => {
  const { title, description, additionalData, fileEnc, tag } = req.body;

  try {
    const uploadedResponse = await cloudinary.uploader.upload(fileEnc, {
      upload_preset: "Newsletter_Covers",
    });
    const Newsletter = await NewsletterModal.create({
      title,
      description,
      additionalData,
      tag,
      coverImage: {
        imagePublicId: uploadedResponse.public_id,
        imageSecURL: uploadedResponse.secure_url,
      },
    });

    res.status(201).json({ success: true, Newsletter: Newsletter });
  } catch (error) {
    res.status(500).json({
      success: false,
      desc: "Error in creating newsletter-" + error,
    });
  }
};

exports.getNewsletters = async (req, res) => {
  try {
    const Newsletters = await NewsletterModal.find();
    res.status(200).send({ Newsletters: Newsletters });
  } catch (error) {
    res.status(500).json({
      success: false,
      desc: "Error in fetching Newsletters -" + err,
    });
  }
};

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

exports.updateNewsletter = async (req, res) => {
  const { NID, title, description, additionalData, tag, fileEnc } = req.body;
  let Newsletter;
  try {
    if (fileEnc) {
      const uploadedResponse = await cloudinary.uploader.upload(fileEnc, {
        upload_preset: "Newsletter_Covers",
      });
      Newsletter = await NewsletterModal.findByIdAndUpdate(
        NID,
        {
          $set: {
            title,
            description,
            additionalData,
            additionalData,
            tag,
            coverImage: {
              imagePublicId: uploadedResponse.public_id,
              imageSecURL: uploadedResponse.secure_url,
            },
          },
        },
        {
          new: true,
          upsert: false,
          omitUndefined: true,
        }
      );
    } else {
      Newsletter = await NewsletterModal.findByIdAndUpdate(
        NID,
        {
          $set: {
            title,
            description,
            additionalData,
            additionalData,
            tag,
          },
        },
        {
          new: true,
          upsert: false,
          omitUndefined: true,
        }
      );
    }
    res.status(200).send({
      success: true,
      desc: "newsletter updated successfully",
      Newsletter,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      desc: "Error in update newsletter" + error,
    });
  }
};

exports.deleteNewsletter = async (req, res) => {
  const nid = req.params.id;

  try {
    await NewsletterModal.deleteOne({ _id: nid });

    res.status(200).send({
      success: true,
      desc: "newsletter deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      desc: "Error delete newsletter - " + err,
    });
  }
};

//Discount Management

exports.getProducts = async (req, res) => {
  try {
    const Products = await ProductModel.find();
    res.status(200).send({ Products: Products });
  } catch (error) {
    res.status(500).json({
      success: false,
      desc: "Error in fetching Products -" + err,
    });
  }
};

exports.updateDiscounts = async (req, res) => {
  const { BID, regular, bulk, label } = req.body;

  try {
    const Discount = await ProductModel.findByIdAndUpdate(
      BID,
      {
        $set: {
          discountPercentage: {
            regular,
            bulk,
            label,
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
      success: true,
      desc: "Discount added successfully",
      Discount,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      desc: "Error in add discount" + error,
    });
  }
};

exports.addDiscountsForSelected = async (req, res) => {
  const { BIDs, regular, bulk, label } = req.body;
  let addDiscount = false;
  for (let i = 0; i < BIDs.length; i++) {
    addDiscount = addDiscounts(BIDs[i], regular, bulk, label);
  }

  if (addDiscount) {
    res.status(200).send({
      success: true,
      desc: "Discount added successfully",
    });
  } else {
    res.status(500).json({
      success: false,
      desc: "Error in add discount" + error,
    });
  }
};

const addDiscounts = async (BID, regular, bulk, label) => {
  try {
    const Discount = await ProductModel.findByIdAndUpdate(
      BID,
      {
        $set: {
          discountPercentage: {
            regular,
            bulk,
            label,
          },
        },
      },
      {
        new: true,
        upsert: false,
        omitUndefined: true,
      }
    );

    return true;
  } catch (error) {
    return false;
  }
};

exports.updateNewsletters = async (req, res) => {
  const { NID, fileEnc } = req.body;

  try {
    try {
      const uploadedResponse = await cloudinary.uploader.upload(fileEnc, {
        upload_preset: "Newsletter_Covers",
      });

      try {
        const updatedWorkshop = await NewsletterModal.findByIdAndUpdate(
          { _id: NID },
          {
            profileImage: {
              imagePublicId: uploadedResponse.public_id,
              imageSecURL: uploadedResponse.secure_url,
            },
          },
          {
            new: true,
            upsert: false,
          }
        );
        res.status(200).send({
          success: true,
          desc: " updated successfully",
          updatedWorkshop,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          desc: "Error in updating workshop profileImage data-" + error,
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        desc: "Error in uploading new image-" + error,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      desc: "Error in updateProfilePicture controller-" + error,
    });
  }
};
