import { Breadcrumb, Card, Footer, Hero, Navbar } from 'components';
import hero from 'assets/images/hero.jpg';
import { mustVisit } from 'data';
import { useLocation } from 'react-router';

const CategoryPage = () => {
  const location = useLocation();
  console.log(location, 'here');

  return (
    <div className="category-page">
      <Navbar />
      <Hero img={hero} alt="Monumen Perjuangan Bandung" />
      <div className="container pb-5 pt-4">
        <Breadcrumb parent="Attractions" endpoint="Shopping" />
        <ul className="nav mb-3">
          <li className="me-3" onClick={() => console.log('here')}>
            All
          </li>
          <li className="me-3">Mall &amp; Department Store</li>
          <li className="me-3">Beauty</li>
          <li className="me-3">Souvenir</li>
        </ul>

        <section className="category-page__wrapper">
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

export default CategoryPage;
