const DeliveryManagerModel = require("../models/deliveryManager-model");
const DeliveryCost = require("../models/deliveryCost-model");

exports.addRailwayCost = async (req, res) => {
  const { destination, cost } = req.body;

  try {
    const exisitingrailway = await findrailwayBydestination(destination, res);
    if (exisitingrailway) {
      res.status(400).json({
        desc: "railway already exist - Please check again",
      });
    } else {
      const RailwayData = {
        destination,
        cost,
      };
      const newrailCost = await DeliveryCost.findOneAndUpdate(
        { _id: "61254903d7838a311450fee9" },
        { $push: { traincost: RailwayData } },
        {
          new: true,
        }
      );

      res.status(201).json({
        newrailCost,
        desc: "New Railway Cost added",
      });
    }
  } catch (error) {
    res.status(500).json({
      error,
      desc: "Error occurred in railwayCost",
    });
  }
};

const findrailwayBydestination = async (destination, res) => {
  try {
    const exisitingrailway = await DeliveryCost.findOne({
      "traincost.destination": destination,
    });
    return exisitingrailway;
  } catch (error) {
    res.status(422).json({
      error,
      desc: "Error occurred in exisitingrailway",
    });
  }
};

//retreive train cost
exports.getRailwayCost = async (req, res) => {
  try {
    const railWays = await DeliveryCost.findById("61254903d7838a311450fee9");
    res.send(railWays.traincost);
  } catch (error) {
    res.status(500).json({
      error,
      desc: "Error occurred in railwayCost",
    });
  }
};

//Edit train cost
exports.editRailwayCost = async (req, res) => {
  let { railwayID, destination, cost } = req.body;
  if (!destination) {
    destination = undefined;
  }
  if (!cost) {
    cost = undefined;
  }

  try {
    const RailwayData = await DeliveryCost.findOneAndUpdate(
      { "traincost._id": railwayID },
      {
        $set: {
          "traincost.$.destination": destination,
          "traincost.$.cost": cost,
        },
      },
      {
        new: true,
        upsert: false,
        omitUndefined: true,
      }
    );

    res
      .status(200)
      .json({ success: true, desc: "Railway Cost Data Updated", RailwayData });
  } catch (error) {
    res.status(500).json({
      success: false,
      desc: "Error in editSpeaker controller-" + error,
    });
  }
};

exports.deleteRailwayCost = async (req, res) => {
  const { railwayID } = req.body;
  console.log(req.body);
  try {
    const RailwayData = await DeliveryCost.updateOne(
      { _id: "61254903d7838a311450fee9" },
      { $pull: { traincost: { _id: railwayID } } },
      {
        new: true,
      }
    );
    res
      .status(200)
      .json({ success: true, desc: "Railway Cost Data deleted", RailwayData });
    console.log("sucess");
  } catch (error) {
    res.status(500).json({
      success: false,
      desc: "Error in railwayCost controller-" + error,
    });
  }
};

//Retreive Retail cost
exports.getRetailCost = async (req, res) => {
  try {
    const retailCost = await DeliveryCost.findById("61254903d7838a311450fee9");
    res.send(retailCost.retailcost);
  } catch (error) {
    res.status(500).json({
      error,
      desc: "Error occurred in railwayCost",
    });
  }
};

//Edit Retail cost
exports.editRetailCost = async (req, res) => {
  let { retailID, provincename, cost } = req.body;
  if (!provincename) {
    provincename = undefined;
  }
  if (!cost) {
    cost = undefined;
  }

  try {
    const RailwayData = await DeliveryCost.findOneAndUpdate(
      { "retailcost._id": retailID },
      {
        $set: {
          "retailcost.$.provincename": provincename,
          "retailcost.$.cost": cost,
        },
      },
      {
        new: true,
        upsert: false,
        omitUndefined: true,
      }
    );

    res
      .status(200)
      .json({ success: true, desc: "Retail Cost Data Updated", RailwayData });
  } catch (error) {
    res.status(500).json({
      success: false,
      desc: "Error in edit bulk controller-" + error,
    });
  }
};

//Retreive Bulk cost
exports.getBulkCost = async (req, res) => {
  try {
    const bulkCost = await DeliveryCost.findById("61254903d7838a311450fee9");
    res.send(bulkCost.bulkcost);
  } catch (error) {
    res.status(500).json({
      error,
      desc: "Error occurred in railwayCost",
    });
  }
};

//Edit bulk cost
exports.editBulkCost = async (req, res) => {
  let { bulkID, provincename, cost } = req.body;
  if (!provincename) {
    provincename = undefined;
  }
  if (!cost) {
    cost = undefined;
  }

  try {
    const bulkData = await DeliveryCost.findOneAndUpdate(
      { "bulkcost._id": bulkID },
      {
        $set: {
          "bulkcost.$.provincename": provincename,
          "bulkcost.$.cost": cost,
        },
      },
      {
        new: true,
        upsert: false,
        omitUndefined: true,
      }
    );

    res
      .status(200)
      .json({ success: true, desc: "bulk Cost Data Updated", bulkData });
  } catch (error) {
    res.status(500).json({
      success: false,
      desc: "Error in edit bulk controller-" + error,
    });
  }
};
