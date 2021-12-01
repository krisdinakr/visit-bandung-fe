import { Navbar, Hero, Card, Footer } from 'components';
import hero from 'assets/images/hero.jpg';
import { mustVisit, interestSection } from 'data';

export const HomePage = () => (
  <div className="home-page">
    <Navbar />
    <Hero img={hero} alt="Monumen Perjuangan Bandung" />
    <section className="home-page__must-visit container pb-1 py-3">
      <div className="row py-4">
        <h2 className="text-center mb-4">Must Visit</h2>
      </div>
      <div className="row">
        {mustVisit.map((data) => (
          <div className="col-md-4 col-lg-4" key={data.id}>
            <Card type="primary" data={data} />
          </div>
        ))}
      </div>
    </section>
    <section className="home-page__interest container py-1">
      <div className="row py-4">
        <h2 className="text-center mb-4">Explore by Interest</h2>
      </div>
      <div className="row">
        {interestSection.map((data) => (
          <div className="col-md-4" key={data.name}>
            <Card type="overlay" data={data} />
          </div>
        ))}
      </div>
    </section>
    <Footer />
  </div>
);
