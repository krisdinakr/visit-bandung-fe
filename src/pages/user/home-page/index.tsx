import { Navbar, Hero, Card, Footer } from 'components';
import hero from 'assets/images/hero.jpg';
import { mustVisit, interestSection } from 'data';

const HomePage = () => (
  <div className="home-page">
    <Navbar />
    <Hero img={hero} alt="Monumen Perjuangan Bandung" />
    <section className="home-page__must-visit">
      <div className="home-page__title-box">
        <h2 className="home-page__title">Must Visit</h2>
      </div>
      <div className="row">
        {mustVisit.map((data) => (
          <div className="col-md-4 col-lg-4" key={data.id}>
            <Card type="primary" data={data} />
          </div>
        ))}
      </div>
    </section>
    <section className="home-page__interest">
      <div className="home-page__title-box">
        <h2 className="home-page__title">Explore by Interest</h2>
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

export default HomePage;
