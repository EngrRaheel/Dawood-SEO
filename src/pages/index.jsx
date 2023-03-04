// import Navbar from '../../components/common/Navbar'
import Hero from "../../components/Herosection/Hero";
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import BoostYTV from '../../components/BoostYTV/BoostYTV';
import SuperchargeYT from "../../components/SupreChargeYT/SuperchargeYT";
import YtSlider from "../../components/YtSlider/Slider";
import ReviewSlider from "../../components/ReviewSlider/RatingsSlider";

const Home = () => {
  return (
    <>
      <Hero />
      <YtSlider/>
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      <BoostYTV />
      <ReviewSlider/>
      <SuperchargeYT />
    </>
  )
}

export default Home