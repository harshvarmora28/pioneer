import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavbarCompany from "../Navigation/NavbarCompany";
import { db, auth } from "../../firebase";
import {
  doc,
  Timestamp,
  collection,
  addDoc,
  setDoc,
  getDocs,
} from "firebase/firestore";

const CompanyProfile = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const Id = auth.currentUser.uid;
    const colRef = collection(db, "companyData");

    const docs = await getDocs(colRef);

    getDocs(colRef)
      .then((snapShot) => {
        let info = [];
        snapShot.forEach((doc) => {
          if (doc.id === Id) {
            info.push({ ...doc.data(), id: doc.id });
          }
        });
        setData(info);
      })
      .catch((err) => {
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <NavbarCompany />

      {data.map((item) => {
        return (
          <>
            <div class="flex bg-gray-100 rounded-xl m-3 shadow-xl">
              <main class="flex-col bg-indigo-50 w-full ml-4 pr-6">
                <div class="text-center p-4 bg-white mt-3 rounded-xl shadow-lg">
                  <p class="text-4xl font-bold text-gray-700 ">
                    {item.companyName}
                  </p>
                </div>

                <div class="flex justify-between mt-4 space-x-4 s">
                  <div class="bg-white p-3 w-1/3 rounded-xl shadow-lg flex items-center justify-around">
                    <div class="text-center">
                      <p class="text-xl font-bold text-gray-800">Email</p>
                      <span class="text-gray-500">{item.email}</span>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </>
        );
      })}
    </>
  );
};

export default CompanyProfile;
