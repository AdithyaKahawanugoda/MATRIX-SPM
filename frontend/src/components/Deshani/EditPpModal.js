import React, { useState } from 'react';
import { Modal } from "react-responsive-modal";
import Grid from '@material-ui/core/Grid';
import { Formik } from "formik";
// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileEncode from "filepond-plugin-file-encode";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
// Register the plugins
registerPlugin(
    FilePondPluginImageExifOrientation,
    FilePondPluginImagePreview,
    FilePondPluginFileEncode,
    FilePondPluginFileValidateType
  )


  

const EditPpModal = ({ setModalVisible, modalVisible }) => {

    const [file, setFile] = useState([]);

    return (
      
        <Modal
        open={modalVisible}
        onClose={() => {
          setModalVisible(false);
        }}
        center
        styles={{
          modal: {
            border: "3px solid  black",
            borderRadius: "8px",
            maxWidth: "500px",
            width: "50%",
          },
        }}
        focusTrapped={true}
      >
      
        
     
        <Grid item xs={12} md={7} style={{marginLeft:"5rem"}}>
        <h1 className="mb-5 font-bold text-2xl ml-6">Update Profile Picture</h1>
          <div className="border border-lightSilver rounded-2xl border-8 m-1">
            <FilePond
              files={file}
              onupdatefiles={setFile}
              allowMultiple={false}
              allowFileEncode={true}
              maxFiles={1}
              name="files"
              credits={false}
              labelIdle='Upload profile picture<br />Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
              allowFileTypeValidation={true}
              acceptedFileTypes={["image/*"]}
              labelFileTypeNotAllowed={"Please import valid profile picture"}
              required
              allowImagePreview
            />
          </div>
        </Grid>
      
      <Grid item xs={12} md={6} style={{marginLeft:"4.5rem"}}>
        <Formik          
          onSubmit={async (values) => {
            console.log(values);
          }}
        >
          {({ handleChange, handleSubmit, values, errors, touched }) => (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                handleSubmit();
              }}
            >
            <div>
               
                <div className=" flex flex-row  space-x-2 text-center mb-4 md:mb-6 ml-12 mt-3">
                <button
                  type="submit"
                  className="focus:outline-none bg-yellow-500 text-snow-900 text-base rounded border hover:border-transparent w-64 h-10 sm:w-80 sm:h-12"
                  style={{ boxShadow: "0px 10px 15px rgba(3, 17, 86, 0.25)" }}
                >
                  SAVE
                </button>
       
                <button
                type="cancel"
                className="focus:outline-none bg-gray-400 text-snow-900 text-base rounded border hover:border-transparent w-64 h-10 sm:w-80 sm:h-12"
                style={{ boxShadow: "0px 10px 15px rgba(3, 17, 86, 0.25)", }}
              >
                CANCEL
              </button>
              </div>
               
              </div>
            </form>
          )}
        </Formik>
      </Grid>
      
    

</Modal>

    );
};

export default EditPpModal;



