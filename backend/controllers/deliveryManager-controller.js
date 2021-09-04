const DeliveryManagerModel = require("../models/deliveryManager-model");
const DeliveryCost = require("../models/deliveryCost-model");

/* exports.addNewRailwayCost = async (req, res) => {
  const {
    bulkexpressprecentage,
    retailexpressprecentage,
    traincost,
    bulkcost,
    retailcost,
  } = req.body;
  console.log(req.body);
  try {
    const newRailway = await DeliveryCost.create({
      ...req.body,
    });
    res.status(201).json({
      newRailway,
      desc: "New Railway Cost added",
    });
  } catch (error) {
    res.status(500).json({
      error,
      desc: "Error occurred in railwayCost",
    });
  }
}; */

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
