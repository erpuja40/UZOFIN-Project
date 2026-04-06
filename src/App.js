
import Navbar from './componets/Navbar/Navbar';
import Hero from './componets/Hero/Hero';
import PoweringSection from './componets/PoweringSection/PoweringSection';
import PaymentFeature from './componets/PaymentFeature/PaymentFeature';
import PowerApi from './componets/PowerApi/PowerApi';
import WhyUzOFin from './componets/WhyUzOFin/WhyUzOFin';
import IndustrySupport from './componets/IndustrySupport/IndustrySupport';
import IndustryFuture from './componets/IndustryFuture/IndustryFuture';
import Footer from './componets/Footer/Footer';
const App=()=>{
  return(
  <>
   <Navbar/>
   <Hero/>
   <PoweringSection/>
    <PaymentFeature/>
     <PowerApi/>
     <WhyUzOFin/>
      <IndustrySupport/>
      <IndustryFuture/>
      <Footer/>
     
  </>);
}
export default App;