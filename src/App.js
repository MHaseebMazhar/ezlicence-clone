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
import Support from "./Components/Support/Support";
import Blog from "./Components/Blog/Blog";
import InstructwithEzLicence from "./Components/InstructwithEzLicence/InstructwithEzLicence";
import Flexibility from "./Components/Flexibility/Flexibility";
import OnboardingSection from "./Components/OnboardingSection/OnboardingSection"; 
import EzFaqSection from "./Components/EzFaqSection/EzFaqSection";
import EzLogin from "./Components/EzLogin/EzLogin";
import InstructorLogin from "./Components/InstructorLogin/InstructorLogin";
import DrivingPricingAndPackages from "./Components/DrivingPricingAndPackages/DrivingPricingAndPackages";
import GiftVoucherSection from "./Components/GiftVoucherSection/GiftVoucherSection";  
import DrivingLessonsSection from "./Components/DrivingLessonsSection/DrivingLessonsSection";
import EzLicenceAdvantageSection from "./Components/EzLicenceAdvantageSection/EzLicenceAdvantageSection";
import GiftVouchers from "./Components/GiftVouchers/GiftVouchers";
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
        <Route path="/support" element={<Support />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/instruct-with-ezlicence" element={<InstructwithEzLicence />} />
        <Route path="/flexibility" element={<Flexibility />} />
        <Route path="/onboarding" element={<OnboardingSection />} />
        <Route path="/ez-faq" element={<EzFaqSection />} />
        <Route path="/ez-login" element={<EzLogin />} />
        <Route path="/instructor-login" element={<InstructorLogin />} />
        <Route path="/driving-pricing-and-packages" element={<DrivingPricingAndPackages />} />
        <Route path="/gift-voucher" element={<GiftVoucherSection />} />
        <Route path="/driving-lessons-section" element={<DrivingLessonsSection />} />
        <Route path="/ez-licence-advantage" element={<EzLicenceAdvantageSection />} />
        <Route path="/gift-vouchers" element={<GiftVouchers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
