import React from "react";
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
// import IconButton from '@material-ui/core/IconButton';

const ShoppingCart = () => {
 return(
  
  <div className='flex w-full min-h-screen justify-center items-center '>
  <div className="w-full xl:max-w-6xl sm:max-w-xl md:max-w-3xl h-3/4 mt-6 mb-10 p-8 rounded-xl shadow-lg text-black bg-gamboge">
  <h1 className='font-boldTallFont font-semibold text-4xl'>Shopping Cart</h1>
  <div className='flex flex-row space-x-6 bg mt-6'>
  <div className=" w-full lg:max-w-full lg:flex">
  <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"  title="Mountain">
  <img  src="https://toppsta.com/images/covers/5/1/4/1/9781444935141.jpg" alt="Man looking at item at a store"></img>
  </div>
  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8">
     
      <div className="text-gray-900 font-bold text-xl mb-2">Famous Five</div>
      <h5 className="text-gray-700 text-base mb-2">Rs.1500</h5>
      <p className="text-gray-700 text-base mb-4">The Famous Five is a series of children's adventure novels and short stories written by English author Enid Blyton. The first book, Five on a Treasure Island, was published in 1942. The novels feature the adventures of a group of young children – Julian, Dick, Anne, Georgina and her dog Timmy.</p>
      <div className="flex flex-row">
      <div className="m-1">
      <Button variant="contained" color="primary"  >
      +
        </Button>
      </div>
      <div className="m-1">
      <p className="m-2">1</p>
      </div>
      <div className="m-1">
      <Button variant="contained" color="primary"  >
      -
        </Button>
        </div>
     
      
      <div className="m-1">
      <Button
      variant="contained"
      color="secondary"
      startIcon={<DeleteIcon />}
      style={{marginRight:"2rem"}}
    >
      Delete
    </Button>
      </div>
      </div>
    </div>

  </div>
</div>







  <div className="bg-white rounded-xl">
      <h3 className='font-semibold text-lg mt-6 ml-6'>Order Histroy</h3>
     
      <p className="text-white">Line 33:15: Redundant alt attribute. Screen-readers 
      </p>
      <p className=' ml-6'>
      Book Name: Famous five
      </p>
      <p className='mt-4 ml-6'>Quntity: 1</p>
      <p className='mt-4 ml-6'>
      Total : Rs.1500.00
      </p>
      <Button variant="contained" color="primary" style={{marginLeft:"3rem",marginTop:"1rem"}} onClick={()=>{
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
