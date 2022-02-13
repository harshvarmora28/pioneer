import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import { db } from "../../firebase";
import { doc, Timestamp, collection, addDoc } from "firebase/firestore";

//pages
import NavbarCompany from "../Navigation/NavbarCompany";


const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_1gpscjr",
      "template_zn9e02v",
      e.target,
      "user_fYRmmFXEopnIsqEUEBPay"
    )
    .then((res) => {
      alert("Email Sent");
    })
    .catch((err) => {
    });
};

const CompanyHiringCellForm = ({ closeModal, cellEmail }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [cellEmail]);


  const navigate = useNavigate();
  const [formData, setformData] = useState({
    companyName: "",
    email: "",
    phone: "",
    address : "",
    jobTitle: "",
    skills: "",
    requiredEmployees: "",
    lastDate: "",
    error: null,
    loading: false,
  });

  const {
    companyName,
    email,
    phone,
    address,
    jobTitle,
    skills,
    requiredEmployees,
    lastDate,
    error,
    loading,
  } = formData;

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitformData = async (e) => {
    e.preventDefault();
    setformData({ ...formData, error: null, loading: true });
    if (
      !companyName ||
      !jobTitle ||
      !email ||
      !phone ||
      !skills ||
      !address ||
      !requiredEmployees ||
      !lastDate
    ) {
      setformData({
        ...formData,
        error: "Please fill all the fields",
        loading: false,
      });
    }
    const colRef = collection(db, "CompanyHiringCellForm");

    const newDoc = await addDoc(colRef, {
      companyName,
      email,
      phone,
      address,
      jobTitle,
      skills,
      requiredEmployees,
      lastDate,
      createdAt: Timestamp.fromDate(new Date()),
    });


    sendEmail(e);

    setformData({
      companyName: "",
      email:"",
      phone: "",
      jobTitle: "",
      skills: "",
      address: "",
      requiredEmployees: "",
      lastDate: "",
      error: null,
      loading: false,
    });
  };

  return (
    <>
      <form onSubmit={submitformData}>
        <section class="text-gray-600 body-font relative">
          <div class="container px-5 py-16 mx-auto">
            <div class="flex flex-col text-center w-full mb-12">
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                Fill your requirements here, We will mail this to Cell!
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
                      placeholder="Enter Your Company Name"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-full">
                  <div class="relative">
                    <label for="skills" class="leading-7 text-sm text-gray-600">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                      placeholder="Enter Your Email"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div> 
                <div class="p-2 w-full hidden">
                  <div class="relative">
                    <label for="skills" class="leading-7 text-sm text-gray-600">
                      Email
                    </label>
                    <input
                      type="email"
                      id="cellEmail"
                      name="cellEmail"
                      value={cellEmail}
                      onChange={handleChange}
                      placeholder="Enter Your Email"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-full">
                  <div class="relative">
                    <label for="skills" class="leading-7 text-sm text-gray-600">
                      Contact Number
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={phone}
                      onChange={handleChange}
                      placeholder="Enter Your Contact Number"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                

                <div class="p-2 w-full">
                  <div class="relative">
                    <label for="title" class="leading-7 text-sm text-gray-600">
                      Company address
                    </label>
                    <input
                      type="address"
                      id="address"
                      name="address"
                      value={address}
                      onChange={handleChange}
                      placeholder="Enter Your Job Title"
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
                      placeholder="Enter Your Job Title"
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
                      placeholder="Enter the Skills you are looking for"
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
                      placeholder="Enter the Number of Employees Required for Hiring"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-full">
                  <div class="relative">
                    <label
                      for="lastdate"
                      class="leading-7 text-sm text-gray-600"
                    >
                      Last date to apply
                    </label>
                    <input
                      type="date"
                      id="lastDate"
                      name="lastDate"
                      value={lastDate}
                      onChange={handleChange}
                      placeholder="Enter the Last Date to Apply"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                {error ? <p style={{ color: "red" }}>{error}</p> : null}
                <div class="p-2 w-full">
                  <button
                    type="submit"
                    onSubmit={submitformData}
                    disabled={loading}
                    class="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
                  >
                    {loading ? "Posting ..." : "Submit"}
                  </button>
                  <button
                   onSubmit={submitformData}
                  onClick={()=>closeModal(false)}
                  class = "flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
                  >
                    cancle

                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </>
  );
};

export default CompanyHiringCellForm;
