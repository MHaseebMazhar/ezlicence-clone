import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from './Components/Topbar/Topbar';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import FeaturesSection from './Components/FeaturesSection/FeaturesSection';
import HowItWorks from './Components/HowItWorks/HowItWorks';
import TestimonialSlider from './Components/TestimonialSlider/TestimonialSlider';
import DrivingTestPackage from './Components/DrivingTestPackage/DrivingTestPackage';
import WhyChoose from './Components/WhyChoose/WhyChoose';
import EzLicenceAdvantage from './Components/EzLicenceAdvantage/EzLicenceAdvantage';
import Footer from './Components/Footer/Footer';
import Results from './Components/Results/Result';
import Profile from './Components/Profile/Profile';
import Amount from "./Components/Amount/Amount";
import BookLessons from "./Components/BookLessons/BookLessons";
import BookingForm from "./Components/BookingForm/BookingForm";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Topbar />
              <Navbar />
              <Hero />
              
              <FeaturesSection />
              <HowItWorks />
              <TestimonialSlider />
              <DrivingTestPackage />
              <WhyChoose />
              <EzLicenceAdvantage />
              <Footer />
            </>
          }
        />
        <Route path="/results" element={<Results />} />
        <Route path="/profile/:instructorId" element={<Profile />} />
        <Route path="/amount" element={<Amount />} />
        <Route path="/book-lessons" element={<BookLessons />} />
        <Route path="/booking-form" element={<BookingForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
