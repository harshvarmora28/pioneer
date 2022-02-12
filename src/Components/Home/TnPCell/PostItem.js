import {React, useState} from "react";

import JobApplyForm from "./JobApplyForm";



function PostItem() {
  const [openModel , setOpenModel] = useState(false)

  return (
    <>
    {openModel && <JobApplyForm closeModal = {setOpenModel}/>}
    <section class="text-gray-600 body-font mb-3">
      <div class="py-8 px-4 bg-white rounded-xl shadow-lg ">
        <div class="h-full flex items-start">
          <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
              Apr
            </span>
            <span class="font-medium text-lg text-gray-800 title-font leading-none">
              03
            </span>
          </div>
          <div class="flex-grow pl-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-blue-500 mb-1">
              CONSTRUCTION
            </h2>
            <h1 class="title-font text-xl font-medium text-gray-900 mb-3">
              Architecture Designing
            </h1>
            <p class="leading-relaxed mb-5">Civil, CAD, Prototype building</p>
            <span class="title-font font-medium text-gray-900">
              16 Employees Required
            </span>
            <button 
            onClick={()=>setOpenModel(true)}
            class="ml-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded sm:mt-10">
              Apply
            </button>
          </div>
        </div>
      </div>
    </section>
              </>
  );
}

export default PostItem;
