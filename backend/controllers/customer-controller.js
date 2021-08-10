const CustomerModel = require("../models/customer-model");
const DeletedCustomerModel = require("../models/deletedCustomer-model");
const { cloudinary } = require("../utils/cloudinary");
const sendEmail = require("../utils/SendEmail");
const OrderModel = require("../models/order-model");

//fetch customer profile 
exports.getCustomerProfile = async (req,res) =>{
    try{
        if(!req.user) {
            res.status(422).json({
                success:false,
                desc:"Can not find the user - please check again",

            });
        }else {
            res.status(200).send({
                customer:req.user,
            });
        }
    }catch(error) {
        res.status(500).json({
            success:false,
            desc:"Error in getCustomerProfile controller - "+error, 
        });
    }
};

//update cutomer profile
exports.updateCustomerProfile = async (req,res) => {
    const {username,email,address,phone} = req.body;

    try{
        const newData = {
            username,
            email,
            address,
            phone
        };

        const updatedCustomer = await CustomerModel.findByIdAndUpdate(
            req.user.id,
            newData,
            {
                new:true,
                upsert:false,
                omitUndefined:true
            }
        );
        res.status(200).send({
            success:true,
            desc: "customer update successfully",
            updatedCustomer,
        });
    }catch(error){
        res.status(500).json({
            success:false,
            desc:"Error in updating customer profile controller " +error,
        });
    }
};

//update profile picture
exports.updateProfilePicture = async (req, res) => {
    const { fileEnc } = req.body;
  
    try {
      const destroyedImage = await cloudinary.uploader.destroy(
        req.user.profileImage.imagePublicId
      );
      if (destroyedImage) {
        try {
          const uploadedResponse = await cloudinary.uploader.upload(fileEnc, {
            upload_preset: "Profile_Pictures",
          });
  
          try {
            const updatedCustomer = await CustomerModel.findByIdAndUpdate(
              { _id: req.user._id },
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
              updatedCustomer,
            });
          } catch (error) {
            res.status(500).json({
              success: false,
              desc: "Error in updating customer profileImage data-" + error,
            });
          }
        } catch (error) {
          res.status(500).json({
            success: false,
            desc: "Error in uploading new image-" + error,
          });
        }
      } else {
        res.status(500).json({
          success: false,
          desc: "Error in previous image remove-" + error,
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        desc: "Error in updateProfilePicture controller-" + error,
      });
    }
  };

//delete customer profile
exports.deleteCustomerProfile = async(req,res) =>{
    
        if (!mongoose.Types.ObjectId.isValid(req.user._id))
            return res.status(404).send(`No Customer with id: ${req.user._id}`);
    
        try {
            await CustomerModel.findByIdAndRemove(req.user._id);
            const deletedCustomer = await DeleteCustomerModel.create({
                customerID:req.user._id
            });
            const cloudinaryRes = await cloudinary.uploader.destroy(
                req.user.profileImage.imagePublicId
            );
            res.status(200).send({
                success: true,
                desc: "Customer deleted successfully",
                deleteCustomer,
                cloudinaryRes,

            });
        } catch (error) {
            res.status(500).json({
                success: false,
                desc: "Error in delete Customer Profile controller-" + error,
            });
        }
  
    
};




//add products to cart 
exports.addToCart = async(req,res) =>{
    const productID = req.body.productID;
    const CustomerId = req.user._id;

    try{
        const Cart = {
            productID:productID,
        };

        await CustomerModel.findOneAndUpdate(
            { _id:CustomerId},
            {$push:{cart:Cart}},
            {
                new:true,
                upsert:false,
            }
        );
        res.status(200).send({status:"Product Added to Cart"});
    }catch(error){
        res.status(500).send({error: error.message});
    }
};

//remove products from cart
exports.removeCartItems = async(req,res) =>{
    const proId = req.body.pid;
    try{
        const customer = req.user.pid;
        await CustomerModel.updateOne(
            {_id:customer},
            {$pull:{cart:{productID:proId}}}
        );

        res.status(200).send({
            status:"product removed from the list",
        });
    }catch(error){
        res.status(500).send({
            status:"Internal Server error in deleting cart items",
            error:error.message,
        });
    }
};

//fetch cart
exports.getCartItems = async(req,res) =>{
    let cusId = req.user._id;

    await CustomerModel.findById(cusId)
    .then((customer) =>{
        res.status(200).send({status:"Cart fetched",cart:customer.cart});
    })
    .catch((err) =>{
        res.status(500).send({
            status: "Internal server Error in fetching customer",
            error:err.message,
        });
    })
};


