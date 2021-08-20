import React from "react";

import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const TrainCost = () => {
  return <div>



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
                     <h5 class ="text-white" >Moratuwa </h5>
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
                     <h5 class ="text-white" >Kandy </h5>
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
                     <h5 class ="text-white" >Galle </h5>
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
                     <h5 class ="text-white" >Anuradhapura </h5>
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
                     <h5 class ="text-white" >Jaffna </h5>
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
                     <h5 class ="text-white" >Mathara </h5>
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
