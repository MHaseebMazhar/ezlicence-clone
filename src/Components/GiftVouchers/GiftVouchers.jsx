import React, { useState } from "react";
import Topbar from "../Topbar/Topbar";
import Navbar from "../Navbar/Navbar";
import GiftVoucherBanner from "./GiftVoucherBanner/GiftVoucherBanner";
import GiftVoucherProcess from "./GiftVoucherProcess/GiftVoucherProcess";
import GiftVoucherCTA from "./GiftVoucherCTA/GiftVoucherCTA"; 
import Footer from "../Footer/Footer";
import "./GiftVouchers.css";
const GiftVouchers = () => {
  const [postcode, setPostcode] = useState("");
  const [searchStatus, setSearchStatus] = useState(null);
  const handleSearch = () => {
    const trimmed = postcode.trim();
    if (trimmed.length >= 4) {
      setSearchStatus({ type: "success", message: `Searching in ${trimmed}...` });
      setTimeout(() => {
        setSearchStatus({ type: "success", message: `Instructors found in ${trimmed}` });
      }, 1500);
    } else {
      setSearchStatus({ type: "error", message: "Please enter at least 4 characters." });
    }
  };
  return (
    <>
      <Topbar />
      <Navbar />
      <GiftVoucherBanner />
    <div className="giftvoucher-container">
      {/* Search Bar */}
      <div className="giftvoucher-searchbar"> 
      <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <input
            type="text"
            placeholder="Enter postcode"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        {searchStatus && (
          <p className={`status ${searchStatus.type}`}>{searchStatus.message}</p>
        )}
      </div>

      {/* Footer */}
      <div className="giftvoucher-footer"></div>
    </div>
      <GiftVoucherProcess />
      <GiftVoucherCTA />
      <Footer />
    </> 
  );
};

export default GiftVouchers;
