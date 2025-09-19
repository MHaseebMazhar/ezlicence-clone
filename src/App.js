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
function App() {
  return (
    <div>
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
    </  div>
  );
}

export default App;
