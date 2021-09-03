import React from "react";
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const ShoppingCart = () => {
 return(
  
  <div className='flex w-full min-h-screen justify-center items-center '>
  <div className="w-full xl:max-w-6xl sm:max-w-xl md:max-w-3xl h-3/4 mt-6 mb-10 p-8 rounded-xl shadow-lg text-black bg-gamboge">
  <h1 className='font-boldTallFont font-semibold text-4xl'>Shopping Cart</h1>
  <div className='flex flex-row space-x-6 bg mt-6'>
   <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div className="md:flex">
    <div className="md:flex-shrink-0">
      <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://toppsta.com/images/covers/5/1/4/1/9781444935141.jpg" alt="Man looking at item at a store"></img>
    </div>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold"><h5>Famous Five</h5></div>
      <h5  className="block mt-1 text-lg leading-tight font-medium text-black ">Rs.1500</h5>
      <p className="mt-2 text-gray-400"> The Famous Five is a series of children's adventure novels and short stories written by English author Enid Blyton. The first book, Five on a Treasure Island, was published in 1942. The novels feature the adventures of a group of young children – Julian, Dick, Anne, Georgina and her dog Timmy.</p>
      <div className="flex flex-row space-x-6 mt-2">
      <Button variant="contained" color="primary" className="mr-20" >
      +
        </Button>
      <p>1</p>
      <Button variant="contained" color="primary" className="mr-20" >
      -
        </Button>
        <Button
        variant="contained"
        color="secondary"
       
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
        
        </div>
    </div>
  </div>
</div>
  <div className="bg-white rounded-xl">
      <h3 className='font-semibold text-lg mt-6 ml-6'>Order Histroy</h3>
     
      <p className="text-white">Line 33:15: Redundant alt attribute. Screen-readers 
      </p>
      <p className='mt-4 ml-6'>
      Book Name: Famous five
      </p>
      <p className='mt-4 ml-6'>Quntity: 1</p>
      <p className='mt-4 ml-6'>
      Total : Rs.1500.00
      </p>
      <Button variant="contained" color="primary" style={{marginLeft:"6.5rem",marginTop:"1rem"}} onClick={()=>{
        window.location.href="/checkout"
      }}>
        Proceed to pay
        </Button>
  </div>
  </div>
  </div>
  </div>
  
 )
};

export default ShoppingCart;
