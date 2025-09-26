import React from "react";
import "./InstructwithEzLicence.css"; // import simple CSS
import Topbar from "../Topbar/Topbar";
import Navbar from "../Navbar/Navbar";
import EzLicenceAdvantage from "../EzLicenceAdvantage/EzLicenceAdvantage";
import Footer from "../Footer/Footer";
const bottomFaqs = [
  {
    id: 1,
    title: "How do I find private driving instructors near me?",
    content:
      "Booking driving lessons through EzLicence is a quick and hassle free process that gives you all the choice and control. Why deal with traditional Driving Schools over the phone or by email when you can manage your driving instructor choice & book driving lessons yourself anywhere, and at any time through our secure online platform?",
  },
  {
    id: 2,
    title: "EzLicence: Driving Lessons, Your Way.",
    content:
      "Booking driving lessons through EzLicence is a quick and hassle free process that gives you all the choice and control. Why deal with traditional Driving Schools over the phone or by email when you can manage your driving instructor choice & book driving lessons yourself anywhere, and at any time through our secure online platform?",
  },
  {
    id: 3,
    title: "Why We’re a Leading Learner Driver Platform in the UK",
    content:
      "Booking driving lessons through EzLicence is a quick and hassle free process that gives you all the choice and control. Why deal with traditional Driving Schools over the phone or by email when you can manage your driving instructor choice & book driving lessons yourself anywhere, and at any time through our secure online platform?",
  },
  {
    id: 4,
    title: "Driving Instructors & Driving Schools You Can Rely On",
    content:
      "Booking driving lessons through EzLicence is a quick and hassle free process that gives you all the choice and control. Why deal with traditional Driving Schools over the phone or by email when you can manage your driving instructor choice & book driving lessons yourself anywhere, and at any time through our secure online platform?",
  },
];
const InstructwithEzLicence = () => {
  return (
    <div className="instruct-container">
      <Topbar />
      <Navbar />
      <EzLicenceAdvantage />
      <Footer />
      </div>
  );
};

export default InstructwithEzLicence;