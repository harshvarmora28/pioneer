import { React, useState, useEffect } from "react";
import PlacementCellNavbar from "../../Navigation/PlacementCellNavbar";
import { Link } from "react-router-dom";

import { db, auth } from "../../../firebase";
import { firestore, collection, getDocs } from "firebase/firestore";
import { useAuth } from "../../../contexts/AuthContext";

const Profile = () => {
  const { currentUser } = useAuth();

  const [data, setdata] = useState([]);

  const getCellData = async () => {
    const Id = auth.currentUser.uid;

    const colRef = collection(db, "PlacementCellDetails");

    const docs = await getDocs(colRef);

    getDocs(colRef)
      .then((snapShot) => {
        let info = [];
        snapShot.forEach((doc) => {
          if (doc.id === Id) {
            info.push({ ...doc.data(), id: doc.id });
          }
        });
        setdata(info);
      })
      .catch((err) => {
      });
  };

  useEffect(() => {
    getCellData();
  }, []);

  return (
    <>
      <PlacementCellNavbar />
      <div>
        <Link to="/tnpcell/updateprofile">
          <button class="absolute right-10 text-white bg-blue-500 border-0 py-2 px-3 focus:outline-none hover:bg-blue-600 rounded text-md">
            Add/Edit Profile
          </button>
        </Link>
        {data.map((item) => {
          return (
            <>
              <div class="flex bg-gray-100 rounded-xl m-3 shadow-xl">
                <main class="flex-col bg-indigo-50 w-full ml-4 pr-6">
                  <div class="text-center p-4 bg-white mt-3 rounded-xl shadow-lg">
                    <p class="text-4xl font-bold text-gray-700 ">
                      {item.collegeName}
                    </p>
                  </div>

                  <div class="flex justify-between mt-4 space-x-4 s">
                    <div class="bg-white p-3 w-1/3 rounded-xl shadow-lg flex items-center justify-around">
                      <div class="text-center">
                        <p class="text-xl font-bold text-gray-800">ADDRESS</p>
                        <span class="text-gray-500">{item.address}</span>
                      </div>
                    </div>

                    <div class="bg-white w-1/3 p-3 rounded-xl shadow-lg flex items-center justify-around">
                      <div class="text-center">
                        <p class="text-xl font-bold text-gray-800">
                          NIRF
                        </p>
                        <span class="text-gray-500">44</span>
                      </div>
                    </div>

                    <div class="bg-white w-1/3 p-3 rounded-xl shadow-lg flex items-center justify-around">
                      <div class="text-center">
                        <p class="text-xl font-bold text-gray-800">
                          College Website
                        </p>
                        <a class="text-blue-500 cursor-pointer">{item.url}</a>
                      </div>
                    </div>
                  </div>

                  <div class="flex justify-between space-x-4">
                    <div class="bg-white mt-5 w-full flex flex-wrap py-6 rounded shadow-md">
                      <div class="lg:w-1/2 px-6">
                        <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                          About Us
                        </h2>
                        <p class="mt-1">{item.about}</p>
                      </div>
                      <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                        <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                          EMAIL
                        </h2>
                        <a class="text-indigo-500 leading-relaxed">
                          {item.email}
                        </a>
                        <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                          PHONE
                        </h2>
                        <p class="leading-relaxed">{item.phone}</p>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Profile;
