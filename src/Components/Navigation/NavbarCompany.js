import React from "react";
import { Link } from 'react-router-dom';

const NavbarCompany = () => {
  return (
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <Link to="/company/home">
        {/* <img src="metatherapy_logo_with_text.png" alt="" width={190} /> */}
        Company Name
        </Link>
        </a>
        <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link to="/company/home" class="mr-5 hover:text-gray-900">Home</Link>
          <Link to="/company/appliedcells" class="mr-5 hover:text-gray-900">Applied Cells</Link>
          <Link to="/company/availablecells" class="mr-5 hover:text-gray-900">Available Cells</Link>
        </nav>
        <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Sign up
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default NavbarCompany;
