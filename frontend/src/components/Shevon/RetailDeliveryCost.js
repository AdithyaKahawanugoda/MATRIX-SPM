import React, { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import RetailCostEdit from "./modals/RetailCostEditModal";
import RetailExCostModal from "./modals/RetailExCostModal";

const RetailDeliveryCost = () => {
  const [retailCostEditOpen, setRetailCostEditOpen] = useState(false);
  const [retailExCostOpen, setRetailExCostEditOpen] = useState(false);

  return (
    <div>
      <div className="grid grid-cols-2 ">
        <div
          className="rounded-xl   mt-2 mx-0 px-0 py-0  border-0  shadow-md bg-lightSilver bg-opacity-20 overflow-y-auto "
          style={{ maxHeight: "490px" }}
        >
          <div className="rounded-xl   my-2 mx-2 px-5 py-5  border-0  shadow-md bg-prussianBlue bg-opacity-20  ">
            <div className="grid grid-cols-2">
              <div>
                <h5 className="text-black">Express pecentage :</h5>
              </div>
              <div className="font-black ">
                <div className="grid grid-cols-2">
                  <div className="ml-32">
                    {" "}
                    <h5 className="mr-14"> 10% </h5>{" "}
                  </div>
                  <div
                    className="text-right "
                    onClick={() => {
                      setRetailCostEditOpen(false);
                      setRetailExCostEditOpen(true);
                    }}
                  >
                    {" "}
                    <EditIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h5 className="ml-4 mt-8 font-black">Cost per weight(kg)</h5>
          <div className="rounded-xl   my-2 mx-2 px-5 py-5  border-0  shadow-md bg-blueSapphire ">
            <div className="grid grid-cols-2">
              <div>
                <h5 className="text-white">Western Province :</h5>
              </div>
              <div className="text-white ">
                <div className="grid grid-cols-2">
                  <div className="ml-32">
                    {" "}
                    <h5 className="mr-14">Rs.100.00 </h5>{" "}
                  </div>
                  <div
                    className="text-right "
                    onClick={() => {
                      setRetailExCostEditOpen(false);
                      setRetailCostEditOpen(true);
                    }}
                  >
                    {" "}
                    <EditIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl   my-2 mx-2 px-5 py-5  border-0  shadow-md bg-blueSapphire ">
            <div className="grid grid-cols-2">
              <div>
                <h5 className="text-white">Central Province :</h5>
              </div>
              <div className="text-white ">
                <div className="grid grid-cols-2">
                  <div className="ml-32">
                    {" "}
                    <h5 className="mr-14">Rs.500.00 </h5>{" "}
                  </div>
                  <div
                    className="text-right "
                    onClick={() => {
                      setRetailExCostEditOpen(false);
                      setRetailCostEditOpen(true);
                    }}
                  >
                    {" "}
                    <EditIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl   my-2 mx-2 px-5 py-5  border-0  shadow-md bg-blueSapphire ">
            <div className="grid grid-cols-2">
              <div>
                <h5 className="text-white">Eastern Province :</h5>
              </div>
              <div className="text-white ">
                <div className="grid grid-cols-2">
                  <div className="ml-32">
                    {" "}
                    <h5 className="mr-14">Rs.300.00 </h5>{" "}
                  </div>
                  <div
                    className="text-right "
                    onClick={() => {
                      setRetailExCostEditOpen(false);
                      setRetailCostEditOpen(true);
                    }}
                  >
                    {" "}
                    <EditIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl   my-2 mx-2 px-5 py-5  border-0  shadow-md bg-blueSapphire ">
            <div className="grid grid-cols-2">
              <div>
                <h5 className="text-white">Northern Province :</h5>
              </div>
              <div className="text-white ">
                <div className="grid grid-cols-2">
                  <div className="ml-32">
                    {" "}
                    <h5 className="mr-14">Rs.200.00 </h5>{" "}
                  </div>
                  <div
                    className="text-right "
                    onClick={() => {
                      setRetailExCostEditOpen(false);
                      setRetailCostEditOpen(true);
                    }}
                  >
                    {" "}
                    <EditIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl   my-2 mx-2 px-5 py-5  border-0  shadow-md bg-blueSapphire ">
            <div className="grid grid-cols-2">
              <div>
                <h5 className="text-white">Southern Province :</h5>
              </div>
              <div className="text-white ">
                <div className="grid grid-cols-2">
                  <div className="ml-32">
                    {" "}
                    <h5 className="mr-14">Rs.200.00 </h5>{" "}
                  </div>
                  <div
                    className="text-right "
                    onClick={() => {
                      setRetailExCostEditOpen(false);
                      setRetailCostEditOpen(true);
                    }}
                  >
                    {" "}
                    <EditIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl   my-2 mx-2 px-5 py-5  border-0  shadow-md bg-blueSapphire ">
            <div className="grid grid-cols-2">
              <div>
                <h5 className="text-white">North Western Province :</h5>
              </div>
              <div className="text-white ">
                <div className="grid grid-cols-2">
                  <div className="ml-32">
                    {" "}
                    <h5 className="mr-14">Rs.200.00 </h5>{" "}
                  </div>
                  <div
                    className="text-right "
                    onClick={() => {
                      setRetailExCostEditOpen(false);
                      setRetailCostEditOpen(true);
                    }}
                  >
                    {" "}
                    <EditIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl   my-2 mx-2 px-5 py-5  border-0  shadow-md bg-blueSapphire ">
            <div className="grid grid-cols-2">
              <div>
                <h5 className="text-white">North Central Province :</h5>
              </div>
              <div className="text-white ">
                <div className="grid grid-cols-2">
                  <div className="ml-32">
                    {" "}
                    <h5 className="mr-14">Rs.400.00 </h5>{" "}
                  </div>
                  <div
                    className="text-right "
                    onClick={() => {
                      setRetailExCostEditOpen(false);
                      setRetailCostEditOpen(true);
                    }}
                  >
                    {" "}
                    <EditIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl   my-2 mx-2 px-5 py-5  border-0  shadow-md bg-blueSapphire ">
            <div className="grid grid-cols-2">
              <div>
                <h5 className="text-white">Uva Province :</h5>
              </div>
              <div className="text-white ">
                <div className="grid grid-cols-2">
                  <div className="ml-32">
                    {" "}
                    <h5 className="mr-14">Rs.700.00 </h5>{" "}
                  </div>
                  <div
                    className="text-right "
                    onClick={() => {
                      setRetailExCostEditOpen(false);
                      setRetailCostEditOpen(true);
                    }}
                  >
                    {" "}
                    <EditIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl   my-2 mx-2 px-5 py-5  border-0  shadow-md bg-blueSapphire ">
            <div className="grid grid-cols-2">
              <div>
                <h5 className="text-white">Sabaragamuwa Province :</h5>
              </div>
              <div className="text-white ">
                <div className="grid grid-cols-2">
                  <div className="ml-32">
                    {" "}
                    <h5 className="mr-14">Rs.800.00 </h5>{" "}
                  </div>
                  <div
                    className="text-right "
                    onClick={() => {
                      setRetailExCostEditOpen(false);
                      setRetailCostEditOpen(true);
                    }}
                  >
                    {" "}
                    <EditIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="rounded-xl   mt-2 ml-2 px-0 py-0  border-0  shadow-md bg-white bg-cover bg-center "
          style={{
            backgroundImage: `url("https://i.ibb.co/3kVbFSv/Who-We-Serve-Courier-Service-1080x675.jpg")`,
          }}
        ></div>
      </div>

      {retailCostEditOpen && (
        <RetailCostEdit
          modalVisible={retailCostEditOpen}
          setModalVisible={setRetailCostEditOpen}
        />
      )}

      {retailExCostOpen && (
        <RetailExCostModal
          modalVisible={retailExCostOpen}
          setModalVisible={setRetailExCostEditOpen}
        />
      )}
    </div>
  );
};

export default RetailDeliveryCost;