import React from "react";
import PlacementCellNavbar from "../../Navigation/PlacementCellNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./Feed";
import Profile from "./Profile";

export default function PlacementCell() {
  return (
    <>
      <PlacementCellNavbar/>
    </>
  );
}
