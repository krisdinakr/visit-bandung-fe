import { Breadcrumb, Card, Footer, Hero, Navbar } from 'components';
import hero from 'assets/images/hero.jpg';
import { mustVisit } from 'data';

export const AttractionsPage = () => {
  return (
    <div className="attractions-page">
      <Navbar />
      <Hero img={hero} alt="Monumen Perjuangan Bandung" />
      <div className="container pb-5 pt-4">
        <Breadcrumb parent="Attractions" endpoint="Shopping" />
        <ul className="nav">
          <li className="me-3">
            Mall &amp; Department Store
          </li>
          <li className="me-3">
           Beauty
          </li>
          <li className="me-3">
            Souvenir
          </li>
        </ul>
       
        <section className="attractions-page__wrapper">
          <div className="row py-3 ">
            {mustVisit.map((data) => (
              <div className="col-md-4" key={data.id}>
                <Card type="secondary" data={data} />
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};
