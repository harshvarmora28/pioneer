import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { updateDoc, doc } from "firebase/firestore";
import { auth, db } from "../../firebase";

const PlacementCellNavbar = () => {
  const navigate = useNavigate();
  const handleSignout = async () => {
    await signOut(auth);

    navigate("/login");
  };

  return (
    <div>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Link to="/tnpcell">
              {/* <img src="metatherapy_logo_with_text.png" alt="" width={190} /> */}
              Hiring-Cell
            </Link>
          </a>
          <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link to="/tnpcell/feed" class="mr-5 hover:text-gray-900">
              Jobs
            </Link>
            
            {auth.currentUser ? (
              <>
                <Link to="/tnpcell/profile" class="mr-5 hover:text-gray-900">
                  profile
                </Link>
                <button
                  onClick={handleSignout}
                  class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 ml-5 md:mt-0"
                >
                  Sign Out
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
              </>
            ) : (
              <>
                <button
                  onClick={() => navigate("/login")}
                  class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
                >
                  Sign in
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
              </>
            )}
          </nav>
        </div>
      </header>
    </div>
  );
};

export default PlacementCellNavbar;
