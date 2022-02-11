import { BrowserRouter, Routes, Route } from "react-router-dom";
import CompanyAppliedCells from "./Components/Home/CompanyAppliedCells";
import CompanyAvailableCells from "./Components/Home/CompanyAvailableCells";
import CompanyHome from "./Components/Home/CompanyHome";
import CompanyPostForm from "./Components/Home/CompanyPostForm";
import NavbarCompany from "./Components/Navigation/NavbarCompany";
import Login from './Components/authentication/Login';
import HomePage from "./Components/Home/HomePage";


function App() {
  return (
    <BrowserRouter>
      <NavbarCompany />
      <Routes>
        {/* <Route exact path="/" element={<Login />} />
        <Route exact path="/logincompany" element={<LoginCompany/>} />
        <Route exact path="/loginplacement" element={<LoginPlacement/>} />
        <Route exact path="/signup" element={<Signup />} /> */}

        <Route exact path="/company/home" element={<CompanyHome/>} />
        <Route exact path="/company/appliedcells" element={<CompanyAppliedCells/>} />
        <Route exact path="/companypostform" element={<CompanyPostForm/>} />
        <Route exact path="/company/availablecells" element={<CompanyAvailableCells/>} />
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
