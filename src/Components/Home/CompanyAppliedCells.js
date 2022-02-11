import React from "react";

const CompanyAppliedCells = () => {
  return (
    <>
      <h1 class="sm:text-3xl text-center text-2xl font-medium title-font mb-2 mt-10 text-gray-900">
        Already posted posts
      </h1>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -mx-4 -my-8">
            <div class="py-8 px-4 lg:w-1/3">
              <div class="h-full flex items-start">
                <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                  <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
                    Mar
                  </span>
                  <span class="font-medium text-lg text-gray-800 title-font leading-none">
                    27
                  </span>
                </div>
                <div class="flex-grow pl-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-blue-500 mb-1">
                    IT SERVICE
                  </h2>
                  <h1 class="title-font text-xl font-medium text-gray-900 mb-3">
                    Web Developer
                  </h1>
                  <p class="leading-relaxed mb-5">
                    Reactjs, Nodejs, HTML, CSS
                  </p>
                  <span class="title-font font-medium text-gray-900">23 Employees Required</span>
                </div>
              </div>
            </div>
            <div class="py-8 px-4 lg:w-1/3">
              <div class="h-full flex items-start">
                <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                  <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
                    Oct
                  </span>
                  <span class="font-medium text-lg text-gray-800 title-font leading-none">
                    17
                  </span>
                </div>
                <div class="flex-grow pl-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-blue-500 mb-1">
                      IT SERVICE
                  </h2>
                  <h1 class="title-font text-xl font-medium text-gray-900 mb-3">
                    App Development
                  </h1>
                  <p class="leading-relaxed mb-5">
                    Android, Java, Flutter
                  </p>
                  <span class="title-font font-medium text-gray-900">56 Employees Required</span>
                </div>
              </div>
            </div>
            <div class="py-8 px-4 lg:w-1/3">
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
                  <p class="leading-relaxed mb-5">
                    Civil, CAD, Prototype building
                  </p>
                  <span class="title-font font-medium text-gray-900">16 Employees Required</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyAppliedCells;
