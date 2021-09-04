import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ChangeAddressModal from "../components/Deshani/ChangeAddressModal";
const Checkout = () => {

    const [changeAddressModalOpen,setChangeAddressModalOpen] = useState(false);

    return (
        <div className='flex w-full min-h-screen justify-center items-center '>
        <div className="w-full xl:max-w-6xl sm:max-w-xl md:max-w-3xl h-3/4 mt-6 mb-10 p-8 rounded-xl shadow-lg text-black bg-gamboge">
        <h1 className='font-boldTallFont font-semibold text-4xl'>Checkout</h1>
        <div className='flex flex-row space-x-6 bg mt-6'>
        <div className="bg-white rounded-xl">
        <h3 className='font-semibold text-lg mt-6 ml-6'>Select a Payment Method</h3>
        <hr></hr>
        <FormControlLabel value="Credit Card" control={<Radio />} label="Credit Card" style={{marginLeft:"2rem"}}/>
        <FormControlLabel value="Cash On Delivery" control={<Radio />} label="Cash On Delivery" style={{marginLeft:"22rem"}}/>
        <img src="https://www.pngitem.com/pimgs/m/1-15888_transparent-visa-master-png-logo-visa-png-2019.png"  alt="Famous five book" className=" w-40 h-15 ml-10"></img>
        <p className='mt-6 ml-6 text-white'>
        Line 33:15:  Redundant alt attribute. Screen-readers already announce `img` tags as an image. 
        You don’t need to use the words `image`, `photo,` or `picture` 
        (or any specified custom words) in the alt prop
        </p>
        </div>
        <div className="bg-white rounded-xl  w-2/3">
        <h3 className='font-semibold text-lg mt-6 ml-6'>Billing Details</h3>
        <p className='mt-6 ml-6'>
        No 85, Braybrooke Place 02,
        Colombo 7. </p>
        <p className='mt-6 ml-6'>
        Phone number - (+94) ( 077) 2437788
        </p>
        <Button variant="contained" color="primary" style={{marginLeft:"5.7rem",marginTop:"1rem"}} 
        onClick={()=>{
          setChangeAddressModalOpen(true);
        }}
        >
          Change Address
          </Button>
        </div>
        </div> 
        <div className="flex flex-col space-y-6 mt-6">
        <div className="bg-white rounded-xl" >
        <h3 className='font-semibold text-lg mt-6 ml-6'>Order Summary</h3>
        <div className="flex flex-row grid-rows-2 ml-48">
        <div>
        <p className='mt-6 ml-6'>Famous five</p>
        </div>
        <div className='mt-6 ml-96'>
        <p>Rs.1500</p>
        </div>
        </div>
        <div className="flex flex-row grid-rows-2 ml-48">
        <div>
        <p className='mt-6 ml-6'>quantity</p>
        </div>
        <div className='mt-6' style={{marginLeft:"29rem"}}>
        <p>1</p>
        </div>
        </div>
        <div className="flex flex-row grid-rows-2 ml-48">
        <div>
        <p className='mt-6 ml-6 font-bold'>Total Price</p>
        </div>
        <div className='mt-6 ml-96'>
        <p className='ml-2 font-bold'>Rs.1500</p>
        </div>
        </div>
        <div  className="flex flex-row grid-rows-2 mt-3 mb-3" style={{marginLeft:"23rem"}}>
        <button
              type="submit"
              className="focus:outline-none bg-blueSapphire text-snow-900 text-base rounded border hover:border-transparent w-64 h-10 sm:w-80 sm:h-12 font-bold text-white"
              style={{ boxShadow: "0px 10px 15px rgba(3, 17, 86, 0.25)" }} 
              onClick={()=>{window.location.href="/order-success"}}
            >
              Confirm Purchase
            </button>
        </div>
        </div>
        </div>   
        </div>
        {changeAddressModalOpen && (
          <ChangeAddressModal
          modalVisible={changeAddressModalOpen}
          setModalVisible={setChangeAddressModalOpen}
          />
        )}
        </div>
       
    )
}

export default Checkout
