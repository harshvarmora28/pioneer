import React, { useState, useEffect } from "react";
import NavbarCompany from "../Navigation/NavbarCompany";

import { db } from "../../firebase"
import { collection, getDocs } from "firebase/firestore";

const CompanyAppliedCells = () => {
  const [data, setdata] = useState([]);
  const getJobPosts = async () => {
    const colRef = collection(db, "jobPostData");
    const docs = await getDocs(colRef);
    setdata(docs.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    getJobPosts();
  }, []);

  return (
    <>
      <NavbarCompany />
      <h1 class="sm:text-3xl text-center text-2xl font-medium title-font mb-2 mt-10 text-gray-900">
        Available Jobs
      </h1>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -mx-4 -my-8">
            {data.map((post) => {
              return (
                <>
                  <div class="py-8 px-4 lg:w-1/3">
                    <div class="h-full flex items-start">
                      <div class="w-22 flex-shrink-0 flex flex-col text-center leading-none">
                      <span class="font-semibold text-black">{post.requiredEmployees}</span>
                        <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200"></span>
                        <p class="text-sm">Employees 
                        <span><br /></span>
                        Required</p>
                        <span class="font-medium text-lg text-gray-800 title-font leading-none"></span>
                      </div>
                      <div class="flex-grow pl-6">
                        <h2 class="tracking-widest text-md title-font font-medium text-blue-600 mb-1">
                          {post.jobTitle}
                        </h2>
                        <p>Company: </p>
                        <h1 class="title-font text-xl font-medium text-gray-900 mb-3">
                          {post.companyName}
                        </h1>
                        <p class="mt-4">Skills Required: </p>
                        <span class="title-font font-medium text-gray-900">
                         {post.skills}
                        </span>
                        <p class="mt-4">Last Date to apply: </p>
                        <span class="title-font font-medium text-gray-900">
                         {post.lastDate}
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyAppliedCells;
