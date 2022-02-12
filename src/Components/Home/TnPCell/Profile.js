import React from "react";
import PlacementCellNavbar from "../../Navigation/PlacementCellNavbar";

let cellname = "Cell name";
let collegeRank = "A+";
let collegeGrade = "A+";
let clgWebSite = "http://www.manit.ac.in/";

function Profile() {
  return (
    <>
      <PlacementCellNavbar></PlacementCellNavbar>
      <div>
        <div class="flex bg-gray-100 rounded-xl m-3 shadow-xl">
          <main class="flex-col bg-indigo-50 w-full ml-4 pr-6">
            <div class="text-center p-4 bg-white mt-3 rounded-xl shadow-lg">
              <p class="text-4xl font-bold text-gray-700 ">{cellname}</p>
            </div>

            <div class="flex justify-between mt-4 space-x-4 s">
              <div class="bg-white p-3 w-1/3 rounded-xl shadow-lg flex items-center justify-around">
                <div class="text-center">
                  <p class="text-xl font-bold text-gray-800">NIRF Rank</p>
                  <span class="text-gray-500">{collegeRank}</span>
                </div>
              </div>

              <div class="bg-white w-1/3 p-3 rounded-xl shadow-lg flex items-center justify-around">
                <div class="text-center">
                  <p class="text-xl font-bold text-gray-800">College Grade</p>
                  <span class="text-gray-500">{collegeGrade}</span>
                </div>
              </div>

              <div class="bg-white w-1/3 p-3 rounded-xl shadow-lg flex items-center justify-around">
                <div class="text-center">
                  <p class="text-xl font-bold text-gray-800">College Website</p>
                  <a class="text-blue-500 cursor-pointer">{clgWebSite}</a>
                </div>
              </div>
            </div>


            <div class="flex justify-between space-x-4">
              <div class="bg-white mt-5 w-full flex flex-wrap py-6 rounded shadow-md">
                <div class="lg:w-1/2 px-6">
                  <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p class="mt-1">
                    Photo booth tattooed prism, portland taiyaki hoodie neutra
                    typewriter
                  </p>
                </div>
                <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <a class="text-indigo-500 leading-relaxed">
                    example@email.com
                  </a>
                  <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                    PHONE
                  </h2>
                  <p class="leading-relaxed">123-456-7890</p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Profile;
