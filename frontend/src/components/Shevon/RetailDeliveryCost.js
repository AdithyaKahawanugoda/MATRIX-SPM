import React,{useState} from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import EditIcon from '@material-ui/icons/Edit';
import RetailCostEdit from "./modals/RetailCostEdit";


const RetailDeliveryCost = () => {
    const [RetailCostEditOpen, setRetailCostEditOpen] = useState(false);

  return <div>

<Grid item xs={12}>
        <Paper class=" rounded-xl px-3 py-3 text-center border-0  shadow-md bg-blueSapphire bg-opacity-30">
          <header class="font-contentFont text-4xl mb-3 font-bold text-prussianBlue ">
            Retail Delivery Cost Managment
          </header>
          <hr></hr>

          <div class="grid grid-cols-2 gap-x-0">
            <div>
              <button class= "ml-20 mt-5  mb-2 bg-blueSapphire hover:bg-prussianBlue text-white font-bold py-2 px-4 rounded-full">
               Bulk Delivery Cost Management
              </button>
            </div>

            <div>
              <button class="mr-20 mt-5 mb-2 bg-blueSapphire hover:bg-prussianBlue text-white font-bold py-2 px-4 rounded-full">
                Train Cost for Bulk Deliveries
              </button>
            </div>
          </div>
        </Paper>
      </Grid>


      <div class ="grid grid-cols-2 ">
      <div class ="rounded-xl   mt-2 mx-0 px-0 py-0  border-0  shadow-md bg-lightSilver bg-opacity-20 overflow-y-auto "style={{ maxHeight: "490px" }}>
       
            <div class ="rounded-xl   my-2 mx-2 px-5 py-5  border-0  shadow-md bg-prussianBlue bg-opacity-20  ">
            <div class ="grid grid-cols-2" >
                <div>
                     <h5 class ="text-black" >Express pecentage :</h5>
                </div>
                <div class ="text-black " > 
                <div class ="grid grid-cols-2" >
                    <div class="ml-32">  <h5 className="mr-14"> 10% </h5> </div>
                    <div class="text-right " onClick={() => {
                  setRetailCostEditOpen(true);
                }}> <EditIcon/></div>
                    
                </div>
                </div>
            </div>
            </div>

                 <h5 class ="ml-4 mt-8 font-black" >Cost per weight(kg)</h5>
            <div class ="rounded-xl   my-2 mx-2 px-5 py-5  border-0  shadow-md bg-blueSapphire ">
            <div class ="grid grid-cols-2" >
                <div>
                     <h5 class ="text-white" >Western Province :</h5>
                </div>
                <div class ="text-white " > 
                <div class ="grid grid-cols-2" >
                    <div class="ml-32">  <h5 className="mr-14">Rs.100.00 </h5> </div>
                    <div class="text-right " onClick={() => {
                  setRetailCostEditOpen(true);
                }}> <EditIcon/></div>
                    
                </div>
                </div>
            </div>
            </div>


            <div class ="rounded-xl   my-2 mx-2 px-5 py-5  border-0  shadow-md bg-blueSapphire ">
            <div class ="grid grid-cols-2" >
                <div>
                     <h5 class ="text-white" >Central Province :</h5>
                </div>
                <div class ="text-white " > 
                <div class ="grid grid-cols-2" >
                    <div class="ml-32">  <h5 className="mr-14">Rs.500.00 </h5> </div>
                    <div class="text-right " onClick={() => {
                  setRetailCostEditOpen(true);
                }}> <EditIcon/></div>
                    
                </div>
                </div>
            </div>
            </div>

            <div class ="rounded-xl   my-2 mx-2 px-5 py-5  border-0  shadow-md bg-blueSapphire ">
            <div class ="grid grid-cols-2" >
                <div>
                     <h5 class ="text-white" >Eastern Province :</h5>
                </div>
                <div class ="text-white " > 
                <div class ="grid grid-cols-2" >
                    <div class="ml-32">  <h5 className="mr-14">Rs.300.00 </h5> </div>
                    <div class="text-right " onClick={() => {
                  setRetailCostEditOpen(true);
                }}> <EditIcon/></div>
                    
                </div>
                </div>
            </div>
            </div>
           
            <div class ="rounded-xl   my-2 mx-2 px-5 py-5  border-0  shadow-md bg-blueSapphire ">
            <div class ="grid grid-cols-2" >
                <div>
                     <h5 class ="text-white" >Northern Province :</h5>
                </div>
                <div class ="text-white " > 
                <div class ="grid grid-cols-2" >
                    <div class="ml-32">  <h5 className="mr-14">Rs.200.00 </h5> </div>
                    <div class="text-right " onClick={() => {
                  setRetailCostEditOpen(true);
                }}> <EditIcon/></div>
                    
                </div>
                </div>
            </div>
            </div>

            <div class ="rounded-xl   my-2 mx-2 px-5 py-5  border-0  shadow-md bg-blueSapphire ">
            <div class ="grid grid-cols-2" >
                <div>
                     <h5 class ="text-white" >Southern Province :</h5>
                </div>
                <div class ="text-white " > 
                <div class ="grid grid-cols-2" >
                    <div class="ml-32">  <h5 className="mr-14">Rs.200.00 </h5> </div>
                    <div class="text-right " onClick={() => {
                  setRetailCostEditOpen(true);
                }}> <EditIcon/></div>
                    
                </div>
                </div>
            </div>
            </div>


            <div class ="rounded-xl   my-2 mx-2 px-5 py-5  border-0  shadow-md bg-blueSapphire ">
            <div class ="grid grid-cols-2" >
                <div>
                     <h5 class ="text-white" >North Western Province :</h5>
                </div>
                <div class ="text-white " > 
                <div class ="grid grid-cols-2" >
                    <div class="ml-32">  <h5 className="mr-14">Rs.200.00 </h5> </div>
                    <div class="text-right " onClick={() => {
                  setRetailCostEditOpen(true);
                }}> <EditIcon/></div>
                    
                </div>
                </div>
            </div>
            </div>


            <div class ="rounded-xl   my-2 mx-2 px-5 py-5  border-0  shadow-md bg-blueSapphire ">
            <div class ="grid grid-cols-2" >
                <div>
                     <h5 class ="text-white" >North Central  Province :</h5>
                </div>
                <div class ="text-white " > 
                <div class ="grid grid-cols-2" >
                    <div class="ml-32">  <h5 className="mr-14">Rs.400.00 </h5> </div>
                    <div class="text-right " onClick={() => {
                  setRetailCostEditOpen(true);
                }}> <EditIcon/></div>
                    
                </div>
                </div>
            </div>
            </div>

            <div class ="rounded-xl   my-2 mx-2 px-5 py-5  border-0  shadow-md bg-blueSapphire ">
            <div class ="grid grid-cols-2" >
                <div>
                     <h5 class ="text-white" >Uva Province :</h5>
                </div>
                <div class ="text-white " > 
                <div class ="grid grid-cols-2" >
                    <div class="ml-32">  <h5 className="mr-14">Rs.700.00 </h5> </div>
                    <div class="text-right " onClick={() => {
                  setRetailCostEditOpen(true);
                }}> <EditIcon/></div>
                    
                </div>
                </div>
            </div>
            </div>

            <div class ="rounded-xl   my-2 mx-2 px-5 py-5  border-0  shadow-md bg-blueSapphire ">
            <div class ="grid grid-cols-2" >
                <div>
                     <h5 class ="text-white" >Sabaragamuwa Province :</h5>
                </div>
                <div class ="text-white " > 
                <div class ="grid grid-cols-2" >
                    <div class="ml-32">  <h5 className="mr-14">Rs.800.00 </h5> </div>
                    <div class="text-right " onClick={() => {
                  setRetailCostEditOpen(true);
                }}> <EditIcon/></div>
                    
                </div>
                </div>
            </div>
            </div>
        
      </div>

      <div class ="rounded-xl   mt-2 ml-2 px-0 py-0  border-0  shadow-md bg-white ">

      </div>
      </div>

      {RetailCostEditOpen && (
        <RetailCostEdit
          modalVisible={RetailCostEditOpen}
          setModalVisible={setRetailCostEditOpen}
        />
      )}
  </div>
};

export default RetailDeliveryCost;
