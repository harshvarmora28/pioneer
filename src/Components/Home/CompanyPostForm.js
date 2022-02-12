import React, { useState } from "react";

import { getDatabase, ref, set } from "firebase/database";
import NavbarCompany from "../Navigation/NavbarCompany";

const post_id = `post-${Date.now()}`;

function writeToUserData(Cname, jobName, skills, requiredEmployees, lastdate) {
  const db = getDatabase();
  set(ref(db, "company/post"), {
    companyName: Cname,
    job_title: jobName,
    skills_required: skills,
    requiredEmployees: requiredEmployees,
    lastdate: lastdate,
  });
}

const CompanyPostForm = () => {

  const [postData, setPostData] = useState({
    companyName: "",
    jobTitle: "",
    skills: "",
    requiredEmployees: "",
    lastDate: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { companyName, jobTitle, skills, requiredEmployees, lastDate } =
    postData;

  const handleChange = (e) => {
    e.preventDefault();
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const submitPostData = async (e) => {
    e.preventDefault();
    setPostData({ ...postData});
    setError(null)
    setLoading(true);
    if (
      !companyName ||
      !jobTitle ||
      !skills ||
      !requiredEmployees ||
      !lastDate
    ) {
      setPostData({
        ...postData,
      });
      setError("All fields are required")
      setLoading(true);
    }

    console.log(loading);
    
    if (requiredEmployees < 1) {
      setPostData({
        ...postData,
      });
      setError("Number of employees must be at least 1");
      setLoading(true);
    }
    console.log(loading);
    
    
    if(!loading){
      const db = getDatabase();
      set(ref(db, `company/${post_id}`), {
        postData 
      }).then(() => {
        alert("Added");
      });
    } else {
      alert(error)
    }

    console.log(loading);
    
    setPostData({
      companyName: "",
      jobTitle: "",
      skills: "",
      requiredEmployees: "",
      lastDate: "",
    });
    setError("");
    setLoading(false);
  };

  return (
    <>
    {/* <NavbarCompany/> */}
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-16 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 -mt-6 text-gray-900">
              Hire Now
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              You can fill your requirements here, we will send it to the
              placement cell
            </p>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="skills" class="leading-7 text-sm text-gray-600">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={companyName}
                    onChange={handleChange}
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="title" class="leading-7 text-sm text-gray-600">
                    Job Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="jobTitle"
                    value={jobTitle}
                    onChange={handleChange}
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="skills" class="leading-7 text-sm text-gray-600">
                    Skills Required
                  </label>
                  <input
                    type="text"
                    id="skills"
                    name="skills"
                    value={skills}
                    onChange={handleChange}
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="skills" class="leading-7 text-sm text-gray-600">
                    Employees Required
                  </label>
                  <input
                    type="text"
                    id="requiredEmployees"
                    name="requiredEmployees"
                    value={requiredEmployees}
                    onChange={handleChange}
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="lastdate" class="leading-7 text-sm text-gray-600">
                    Last date to apply
                  </label>
                  <input
                    type="date"
                    id="lastDate"
                    name="lastDate"
                    value={lastDate}
                    onChange={handleChange}
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
              </div>
              <div class="p-2 w-full">
                <button
                  type="submit"
                  onClick={submitPostData}
                  class="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
                  >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
  );
};

export default CompanyPostForm;
