import React from 'react'
import { Link } from 'react-router-dom';

export default function PlacementCellNavbar() {
  return (
    <div>
      <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <Link to="/tnpcell">
        {/* <img src="metatherapy_logo_with_text.png" alt="" width={190} /> */}
        T&P Cell Name
        </Link>
        </a>
        <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link to="/tnpcell/feed" class="mr-5 hover:text-gray-900">Posted Jobs</Link>
          <Link to="/tnpcell/profile" class="mr-5 hover:text-gray-900">Your profile</Link>
        </nav>
      </div>
    </header>
    </div>
  )
}
