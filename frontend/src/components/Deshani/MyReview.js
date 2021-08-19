import React,{useState} from 'react';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';


const MyReview = () => {

    // const [editModalOpen,setEditModalOpen] = useState(false);
    // const [deleteModalOpen,setDeleteModalOpen] = useState(false);
    return (
        <div className='flex w-full min-h-screen justify-center items-center '>
        <div className='flex flex-col space-y-6 bg w-full xl:max-w-6xl sm:max-w-xl md:max-w-3xl h-3/4 mt-6 mb-10 p-8 rounded-xl shadow-lg text-black bg-gamboge'>
        <h1 className='font-boldTallFont font-semibold text-4xl'>My Reviews</h1>
 
           <div className="max-w-md mx-auto bg-white rounded-xl shadow-sm overflow-hidden md:max-w-2xl justify-start ml-5 mt-4">
           <div className="md:flex">
             <div className="md:flex-shrink-0">
             
             <img src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&w=1000&q=80" alt="Man looking at item at a store" className="h-48 w-full object-cover md:h-full md:w-48"></img>
             </div>
               
               
             <div className="p-8 space-y-3">
               <div className="uppercase tracking-wide text-sm font-semibold">Famous Five</div>
               <Rating name="read-only" value={4} readOnly />
               <p className="mt-2 text-gray-500">This series of famous Five is my very loved collection.They really takes us into the story, makes us feel it.It is a really good book for teenagers</p>
               <Button variant="contained" color="primary" className="mr-20" >
               Edit Rewiews
                 </Button>
                 <Button
                 variant="contained"
                 color="secondary"
                 style={{marginLeft:"4.5rem"}}
                 startIcon={<DeleteIcon />}
               
               >  Delete Reviews
               </Button>
              
             </div>
           </div>
           
           
         </div>
     
         
  
         
       
      
         </div>
         </div>
  
        
    )
}

export default MyReview
