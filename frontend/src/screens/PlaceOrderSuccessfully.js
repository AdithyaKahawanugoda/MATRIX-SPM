import React from 'react'

const PlaceOrderSuccessfully = () => {
    return (
        <div className='flex w-full min-h-screen justify-center items-center '>
        <div className="w-full xl:max-w-6xl sm:max-w-xl md:max-w-3xl h-3/4 mt-6 mb-10 p-8 rounded-xl shadow-lg text-black bg-gamboge">
        <h1 className='font-boldTallFont font-semibold text-4xl'>Place Order Successfully</h1>
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
        <div  className="flex flex-row grid-rows-2 space-x-10 mt-8 mb-3" style={{marginLeft:"15rem"}}>
        <div>
        <button
              type="submit"
              className="focus:outline-none bg-blueSapphire text-snow-900 text-base rounded border hover:border-transparent w-64 h-10 sm:w-80 sm:h-12 font-bold text-white"
              style={{ boxShadow: "0px 10px 15px rgba(3, 17, 86, 0.25)" }}
            >
              Print Order Summary
        </button>
        </div>
        <div>
        <button
        type="submit"
        className="focus:outline-none bg-gray-500 text-snow-900 text-base rounded border hover:border-transparent w-64 h-10 sm:w-80 sm:h-12 font-bold text-white"
        style={{ boxShadow: "0px 10px 15px rgba(3, 17, 86, 0.25)" }}
      >
        Back to Home
        </button>
        </div>
        </div>
        </div>
        </div>
        </div>  
        </div>
    )
}

export default PlaceOrderSuccessfully
