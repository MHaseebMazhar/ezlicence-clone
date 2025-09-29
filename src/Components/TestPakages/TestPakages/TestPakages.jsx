import React from "react";
import "./TestPakages.css";
import Topbar from "../../Topbar/Topbar";
import Navbar from "../../Navbar/Navbar";
import DrivingPackage from "../DrivingPackage/DrivingPackage";
import SearchInstructor from "../SearchInstructor/SearchInstructor";
import DrivingPackageSection from "../DrivingPackageSection/DrivingPackageSection";
import CheckPostcodePricing from "../CheckPostcodePricing/CheckPostcodePricing";
import Footer from "../../Footer/Footer";
const TestPakages = () => {

  return (
    <>
    <Topbar />
    <Navbar />
    <DrivingPackage />
    <SearchInstructor />
    <DrivingPackageSection />
    <CheckPostcodePricing />
      <Footer />
    </>
  );
}
export default TestPakages;