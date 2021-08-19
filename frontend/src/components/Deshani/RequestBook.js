import React from 'react'
import * as Yup from "yup";
import { Formik } from "formik";




const RequestBook = () => {
    return (
        <div className='flex w-full min-h-screen justify-center items-center '>
        <div className='flex flex-col space-y-6 bg w-full xl:max-w-6xl sm:max-w-xl md:max-w-3xl h-3/4 mt-6 mb-10 p-8 rounded-xl shadow-lg text-black bg-gamboge'>
        <h1 className='font-boldTallFont font-semibold text-4xl'>Request Translation Book</h1>
        <Formik
          initialValues={{ bookName: "", author: "", description:"", language:"" }}
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
              <div className="flex flex-col mb-6">
                <div className="pb-6 md:pr-3 md:mb-0 w-full">
                  <label
                    className="block text-sm font-medium leading-149 mb-3 md:text-lg"
                    htmlFor={"bookName"}
                  >
                    Book Name :
                  </label>
                  <input
                    className={`focus:outline-none w-full pb-2 md:pb-3 border-b focus:border-blue-900  text-base rounded-md`}
                    id="bookName"
                    type="text"
                    onChange={handleChange("author")}
                    value={values.bookName}
                  />
                </div>
                <div className="pb-6 md:pr-3 md:mb-0 w-full">
                  <label
                    className="block text-sm font-medium leading-149 mb-3 md:text-lg"
                    htmlFor={"author"}
                  >
                    Author :
                  </label>
                  <input
                    className={`focus:outline-none w-full pb-2 md:pb-3 border-b focus:border-blue-900  text-base rounded-md`}
                    id="author"
                    type="text"
                    onChange={handleChange("password")}
                    value={values.password}
                  />
                 
                </div>
                <div className="pb-6 md:pr-3 md:mb-0 w-full">
                <label
                  className="block text-sm font-medium leading-149 mb-3 md:text-lg"
                  htmlFor={"description"}
                >
                  Description :
                </label>
                <textarea
                  className={`focus:outline-none w-full pb-2 md:pb-3 border-b focus:border-blue-900  text-base rounded-md`}
                  id="description"
                  rows="4"
                  type="text-box"
                  onChange={handleChange("description")}
                  value={values.description}
                  
                />
              </div>
              <div className="pb-6 md:pr-3 md:mb-0 w-full grid grid-flow-col grid-cols-6 place-content-center" >
                <label
                  className="block text-sm font-medium leading-149 mb-3 md:text-lg"
                  htmlFor={"language"}
                >
                  Language :
                </label>
                <div>
                <input
                  className={`focus:outline-none pb-2 md:pb-3 border-b focus:border-blue-900 justify-start`}
                  id="language"
                  type="radio"
                  onChange={handleChange("language")}
                  value={values.language}
                  style={{marginLeft:"-3rem",marginBottom:"2rem"}}
                />
                </div>
                <div>
                <label
                className="block text-sm font-medium leading-149 mb-3 md:text-lg"
                htmlFor={"language"}
              >
                Sinhala
              </label>
              </div>
              <div>
                <input
                  className={`focus:outline-none pb-2 md:pb-3 border-b focus:border-blue-900 justify-start`}
                  id="language"
                  type="radio"
                  onChange={handleChange("language")}
                  value={values.language}
                />
            </div>
            <div>
                <label
                className="block text-sm font-medium leading-149 mb-3 md:text-lg"
                htmlFor={"language"}
              >
                Tamil
              </label>
            </div>
            <div>
                <input
                  className={`focus:outline-none w-full pb-2 md:pb-3 border-b focus:border-blue-900  text-base`}
                  id="language"
                  type="radio"
                  onChange={handleChange("language")}
                  value={values.language}
                />
            </div>
            <div>
                <label
                className="block text-sm font-medium leading-149 mb-3 md:text-lg"
                htmlFor={"language"}
              >
                English
              </label>
            </div>
              </div>
              
              </div>
              <div className="text-center mb-4 md:mb-6">
                <button
                  type="submit"
                  className="focus:outline-none bg-gray-500 text-snow-900 text-base rounded border hover:border-transparent w-64 h-10 sm:w-80 sm:h-12 mb-40"
                  style={{ boxShadow: "0px 10px 15px rgba(3, 17, 86, 0.25)" }}
                >
                  Submit
                </button>
              </div>
           
            </form>
          )}
          
        </Formik>
        </div>
        </div>
        
    )
}

export default RequestBook
