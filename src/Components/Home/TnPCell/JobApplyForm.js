import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import { db } from "../../../firebase";
import { doc, Timestamp, collection, addDoc } from "firebase/firestore";

import PlacementCellNavbar from "../../Navigation/PlacementCellNavbar";

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_1gpscjr",
      "template_r2uv4fd",
      e.target,
      "user_fYRmmFXEopnIsqEUEBPay"
    )
    .then((res) => {
      alert("sent");
    })
    .catch((err) => {
      console.log(err);
    });
};

const JobApplyForm = ({ closeModal, applyEmail }) => {
  useEffect(() => {
    console.log(applyEmail);
  }, [applyEmail]);

  const navigate = useNavigate();

  const [cellData, setCellData] = useState({
    companyEmail: "",
    collegeName: "",
    email: "",
    phone: "",
    address: "",
    url: "",
    studentsNo: "",
    about: "",
    error: null,
    loading: false,
  });

  const {
    companyEmail,
    collegeName,
    email,
    phone,
    address,
    url,
    studentsNo,
    about,
    error,
    loading,
  } = cellData;

  const handleChange = (e) => {
    setCellData({ ...cellData, [e.target.name]: e.target.value });
    console.log(cellData);
  };

  const submitApplication = async (e) => {
    e.preventDefault();
    setCellData({ ...cellData, error: null, loading: true });

    const colRef = collection(db, "placementCellApplication");

    const newDoc = await addDoc(colRef, {
      applyEmail,
      collegeName,
      email,
      phone,
      address,
      url,
      studentsNo,
      about,
      createdAt: Timestamp.fromDate(new Date()),
    });

    console.log("Document written with ID: ", newDoc.id);

    sendEmail(e);

    setCellData({
      collegeName: "",
      email: "",
      phone: "",
      address: "",
      url: "",
      studentsNo: "",
      about:"",
      error: null,
      loading: false,
    });
  };

  return (
    <>
      <section class="text-gray-600 body-font relative">
        <form onSubmit={submitApplication}>
          <div class="container px-5 py-16 mx-auto">
            <div class="flex flex-col text-center w-full mb-12">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Let's Get in Touch
              </h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                Fill your application here, we will send it to the hiring
                company
              </p>
            </div>
            <div class="lg:w-1/2 md:w-2/3 mx-auto">
              <div class="flex flex-wrap -m-2">
                <div class="p-2 w-full">
                  <div class="relative">
                    <label for="skills" class="leading-7 text-sm text-gray-600">
                      College Name
                    </label>
                    <input
                      type="text"
                      id="collegeName"
                      name="collegeName"
                      value={collegeName}
                      onChange={handleChange}
                      placeholder="Enter your College Name"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-full">
                  <div class="relative">
                    <label for="title" class="leading-7 text-sm text-gray-600">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      placeholder="Enter your email Address"
                      onChange={handleChange}
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-full hidden">
                  <div class="relative">
                    <label for="title" class="leading-7 text-sm text-gray-600">
                     company Email
                    </label>
                    <input
                      type="email"
                      id="applyEmail"
                      name="applyEmail"
                      value={applyEmail}
                      placeholder="Enter your email Address"
                      onChange={handleChange}
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-full">
                  <div class="relative">
                    <label for="title" class="leading-7 text-sm text-gray-600">
                      Phone Number
                    </label>
                    <input
                      type="phone"
                      id="phone"
                      name="phone"
                      value={phone}
                      placeholder="Enter Placement cell's phone Number"
                      onChange={handleChange}
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-full">
                  <div class="relative">
                    <label for="title" class="leading-7 text-sm text-gray-600">
                      College Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={address}
                      placeholder="Enter your College Address"
                      onChange={handleChange}
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-full">
                  <div class="relative">
                    <label for="title" class="leading-7 text-sm text-gray-600">
                      College Website URL
                    </label>
                    <input
                      type="text"
                      id="url"
                      name="url"
                      value={url}
                      placeholder="Enter your College Website URL"
                      onChange={handleChange}
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-full">
                  <div class="relative">
                    <label for="skills" class="leading-7 text-sm text-gray-600">
                      No. of Students for Interview
                    </label>
                    <input
                      type="text"
                      id="studentsNo"
                      name="studentsNo"
                      value={studentsNo}
                      placeholder="Enter the number of students for interview"
                      onChange={handleChange}
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-full">
                  <div class="relative">
                    <label for="skills" class="leading-7 text-sm text-gray-600">
                      Tell us about your College/University
                    </label>
                    <input
                      type="text"
                      id="about"
                      name="about"
                      value={about}
                      placeholder="Enter brief information about College/University"
                      onChange={handleChange}
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                {error ? <p style={{ color: "red" }}>{error}</p> : null}
                <div class="p-2 w-full">
                  <button
                    type="submit"
                    disabled={loading}
                    onSubmit={submitApplication}
                    class="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
                  >
                    {loading ? "Applying ..." : "Submit"}
                  </button>

                  <button
                    onClick={() => closeModal(false)}
                    class="ml-10 bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded sm:mt-10"
                  >
                    Cancle
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default JobApplyForm;
