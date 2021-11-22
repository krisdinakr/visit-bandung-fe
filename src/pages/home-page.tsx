import { Navbar, Hero, Card } from 'components';
import hero from 'assets/images/hero.jpg';
import {mustVisit} from 'data';

export const HomePage = () => (
  <div className="home-page">
    <Navbar />
    <Hero img={hero} alt="Monumen Perjuangan Bandung" />
    <section className="home-page__must-visit container py-5">
      <div className="row">

      {mustVisit.map((data) => (
        <div className="col-lg-4">
          <Card data={data}/>
        </div>
      ))}
      </div>
    </section>
  </div>
);
