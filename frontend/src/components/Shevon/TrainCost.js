import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const TrainCost = () => {
  return <div>
<Grid item xs={12}>
        <Paper class=" rounded-xl px-3 py-3 text-center border-0  shadow-md bg-blueSapphire bg-opacity-30">
          <header class="font-contentFont text-4xl mb-3 font-bold text-prussianBlue ">
            Train Cost for Bulk Deliveries
          </header>
          <hr></hr>

          <div class="grid grid-cols-2 gap-x-0">
            <div>
              <button class= "ml-20 mt-5  mb-2 bg-blueSapphire hover:bg-prussianBlue text-white font-bold py-2 px-4 rounded-full">
               Retail Delivery Cost
              </button>
            </div>

            <div>
              <button class="mr-20 mt-5 mb-2 bg-blueSapphire hover:bg-prussianBlue text-white font-bold py-2 px-4 rounded-full">
                Bulk Delivery Cost
              </button>
            </div>
            
          </div>
        </Paper>
      </Grid>


      <div class ="grid grid-cols-2 ">
      <div class ="rounded-xl   mt-2 mx-0 px-0 py-0  border-0  shadow-md bg-lightSilver bg-opacity-20 overflow-y-auto "style={{ maxHeight: "490px" }}>
       
                 <h5 class ="ml-4 mt-8 font-black" >Cost per weight(1kg)</h5>
            <div class ="rounded-xl   my-2 mx-2 px-5 py-5  border-0  shadow-md bg-prussianBlue bg-opacity-20  ">
            <div class ="grid grid-cols-2" >
                <div>
                     <h5 class ="text-black" ><AddCircleOutlineIcon/> Add new</h5>
                </div>
                <div class ="text-black " > 
                <div class ="grid grid-cols-2" >
                    
                </div>
                </div>
            </div>
            </div>

            <div class ="rounded-xl   my-2 mx-2 px-5 py-5  border-0  shadow-md bg-blueSapphire ">
            <div class ="grid grid-cols-2" >
                <div>
                     <h5 class ="text-white" >Moratuwa :</h5>
                </div>
                <div class ="text-white " > 
                <div class ="grid grid-cols-2" >
                    <div class="ml-28">  <h5 className="mr-14">Rs.900.00 </h5> </div>
                    <div class="text-right"> <EditIcon/> <DeleteForeverIcon/></div>
                    
                </div>
                </div>
            </div>
            </div>


            <div class ="rounded-xl   my-2 mx-2 px-5 py-5  border-0  shadow-md bg-blueSapphire ">
            <div class ="grid grid-cols-2" >
                <div>
                     <h5 class ="text-white" >Kandy :</h5>
                </div>
                <div class ="text-white " > 
                <div class ="grid grid-cols-2" >
                    <div class="ml-28">  <h5 className="mr-14">Rs.1000.00 </h5> </div>
                    <div class="text-right "> <EditIcon/> <DeleteForeverIcon/></div>
                    
                </div>
                </div>
            </div>
            </div>

            <div class ="rounded-xl   my-2 mx-2 px-5 py-5  border-0  shadow-md bg-blueSapphire ">
            <div class ="grid grid-cols-2" >
                <div>
                     <h5 class ="text-white" >Galle :</h5>
                </div>
                <div class ="text-white " > 
                <div class ="grid grid-cols-2" >
                    <div class="ml-28">  <h5 className="mr-14">Rs.1000.00 </h5> </div>
                    <div class="text-right"> <EditIcon/> <DeleteForeverIcon/></div>
                </div>
                </div>
            </div>
            </div>
           
            <div class ="rounded-xl   my-2 mx-2 px-5 py-5  border-0  shadow-md bg-blueSapphire ">
            <div class ="grid grid-cols-2" >
              
                <div>
                     <h5 class ="text-white" >Anuradhapura :</h5>
                </div>
                <div class ="text-white " > 
                <div class ="grid grid-cols-2" >
                    <div class="ml-28">  <h5 className="mr-14">Rs.2000.00 </h5> </div>
                    <div class="text-right"> <EditIcon/> <DeleteForeverIcon/></div>
                    
                </div>
                </div>
            </div>
            </div>

            <div class ="rounded-xl   my-2 mx-2 px-5 py-5  border-0  shadow-md bg-blueSapphire ">
            <div class ="grid grid-cols-2" >
                <div>
                     <h5 class ="text-white" >Jaffna :</h5>
                </div>
                <div class ="text-white " > 
                <div class ="grid grid-cols-2" >
                    <div class="ml-28">  <h5 className="mr-14">Rs.5000.00 </h5> </div>
                    <div class="text-right"> <EditIcon/> <DeleteForeverIcon/></div>
                    
                </div>
                </div>
            </div>
            </div>


            <div class ="rounded-xl   my-2 mx-2 px-5 py-5  border-0  shadow-md bg-blueSapphire ">
            <div class ="grid grid-cols-2" >
                <div>
                     <h5 class ="text-white" >Mathara :</h5>
                </div>
                <div class ="text-white " > 
                <div class ="grid grid-cols-2" >
                    <div class="ml-28">  <h5 className="mr-14">Rs.1000.00 </h5> </div>
                    <div class="text-right"> <EditIcon/><DeleteForeverIcon/></div>
                    
                </div>
                </div>
            </div>
            </div>


            <div class ="rounded-xl   my-2 mx-2 px-5 py-5  border-0  shadow-md bg-blueSapphire ">
            <div class ="grid grid-cols-2" >
                <div>
                     <h5 class ="text-white" >Tangalle :</h5>
                </div>
                <div class ="text-white " > 
                <div class ="grid grid-cols-2" >
                    <div class="ml-28">  <h5 className="mr-14">Rs.400.00 </h5> </div>
                    <div class="text-right"> <EditIcon/><DeleteForeverIcon/></div>
                    
                </div>
                </div>
            </div>
            </div>
      </div>

      <div class ="rounded-xl   mt-2 ml-2 px-0 py-0  border-0  shadow-md bg-white ">

      </div>
      </div>
  </div>;
};

export default TrainCost;
