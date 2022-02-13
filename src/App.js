import { BrowserRouter, Routes, Route } from "react-router-dom";
import CompanyAppliedCells from "./Components/Home/CompanyAppliedCells";
import CompanyAvailableCells from "./Components/Home/CompanyAvailableCells";
import CompanyHome from "./Components/Home/CompanyHome";
import CompanyPostForm from "./Components/Home/CompanyPostForm";
import Login from './Components/authentication/Login';
import HomePage from "./Components/Home/HomePage";
import PlacementCell from "./Components/Home/TnPCell/PlacementCell"
import Feed from "./Components/Home/TnPCell/Feed";
import Profile from "./Components/Home/TnPCell/Profile";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/company" element={<CompanyHome/>} />
        <Route exact path="/company/appliedcells" element={<CompanyAppliedCells/>} />
        <Route exact path="/companypostform" element={<CompanyPostForm/>} />
        <Route exact path="/company/availablecells" element={<CompanyAvailableCells/>} />
        <Route exact path="/tnpcell" element={<PlacementCell />} />
        <Route exact path="/tnpcell/feed" element={<Feed />} />
        <Route exact path="/tnpcell/profile" element={<Profile />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
