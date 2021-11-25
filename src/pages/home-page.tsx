import { Navbar, Hero, Card } from 'components';
import hero from 'assets/images/hero.jpg';
import { mustVisit } from 'data';

export const HomePage = () => (
  <div className="home-page">
    <Navbar />
    <Hero img={hero} alt="Monumen Perjuangan Bandung" />
    <section className="home-page__must-visit container py-5">
      <div className="row vh-100">
        {mustVisit.map((data) => (
          <div className="col-md-4 col-lg-3" key={data.id}>
            <Card type="secondary" data={data} />
          </div>
        ))}
      </div>
    </section>
  </div>
);
