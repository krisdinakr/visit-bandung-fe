import { Navbar, Hero } from 'components';
import hero from 'assets/images/hero.jpg';

export const HomePage = () => (
  <div className="home-page">
    <Navbar />
    <Hero img={hero} alt="Monumen Perjuangan Bandung" />
  </div>
);
