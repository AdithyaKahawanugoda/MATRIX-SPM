import React,{useState} from 'react';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditReviewModal from './EditReviewModal';
import DeleteReviewModal from './DeleteReviewModal';


const MyReview = () => {

    const [editModalOpen,setEditModalOpen] = useState(false);
    const [deleteModalOpen,setDeleteModalOpen] = useState(false);
    return (
        <div className='flex w-full min-h-screen justify-center items-center '>
        <div className='flex flex-col space-y-6 bg w-full xl:max-w-6xl sm:max-w-xl md:max-w-3xl h-3/4 mt-6 mb-10 p-8 rounded-xl shadow-lg text-black bg-gamboge'>
        <h1 className='font-boldTallFont font-semibold text-4xl'>My Reviews</h1>
 
         <div className=" w-full lg:max-w-full lg:flex">
         <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"  title="Mountain">
         <img src="https://i.ibb.co/S6t2SV6/81-YOu-OGFCJL-1-1.jpg" alt="Man looking at item at a store" ></img>
         </div>
         <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
           <div className="mb-8">
            
             <div className="text-gray-900 font-bold text-xl mb-2">Harry Potter and the Philosopher's Stone</div>
             <Rating name="read-only" value={5} readOnly />
             <p className="text-gray-700 text-base mb-10">I can honestly say from the bottom of my heart, with every ounce of my being, that the Harry Potter books are among some of the most well-developed, thoroughly planned, terrifically intriguing, thought-provoking and meaningful books I have ever read.</p>
             <Button variant="contained" color="primary" className="mr-20" onClick={() =>{
              setEditModalOpen(true);
            }} >
            Edit Rewiews
              </Button>
              <Button
              variant="contained"
              color="secondary"
              style={{marginLeft:"2rem"}}
              startIcon={<DeleteIcon />}
             onClick={()=>{
               setDeleteModalOpen(true);
             }} 
            >  Delete Reviews
            </Button>
           </div>
      
         </div>
       </div>    
        </div>
        {editModalOpen && (
          <EditReviewModal 
          modalVisible={editModalOpen}
          setModalVisible={setEditModalOpen}
          />
        )}
        {deleteModalOpen && (
          <DeleteReviewModal
          modalVisible={deleteModalOpen}
          setModalVisible={setDeleteModalOpen}
          />
        )
        }
        
         </div>
  
        
    )
}

export default MyReview
