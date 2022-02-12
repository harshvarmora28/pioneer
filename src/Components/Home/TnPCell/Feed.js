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
