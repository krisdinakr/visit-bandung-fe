import { Navbar, Hero, Card, Footer } from 'components';
import hero from 'assets/images/hero.jpg';
import { mustVisit } from 'data';

export const HomePage = () => (
  <div className="home-page">
    <Navbar />
    <Hero img={hero} alt="Monumen Perjuangan Bandung" />
    <section className="home-page__must-visit container py-3">
      <div className="row py-4">
        <h2 className="text-center py-3">Must Visit</h2>
      </div>
      <div className="row">
        {mustVisit.map((data) => (
          <div className="col-md-4 col-lg-4" key={data.id}>
            <Card type="primary" data={data} />
          </div>
        ))}
      </div>
    </section>
    <Footer />
  </div>
);
