import React from "react";
import PlacementCellNavbar from "../../Navigation/PlacementCellNavbar";

// import InfiniteScroll from "react-infinite-scroll-component";
import PostItem from "./PostItem";

function Feed() {
  return (
    <>
      <PlacementCellNavbar></PlacementCellNavbar>

      <div>
        <div class="min-h-screen bg-gray-100 flex justify-center items-center">
          <div className="col-md-5 ">
            <h1 class="sm:text-2xl text-2xl font-semibold title-font mt-10 mb-6 text-left px-11 text-gray-900">
              Companies looking for employees
            </h1>
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
          </div>
        </div>
      </div>
    </>
  );
}

export default Feed;
