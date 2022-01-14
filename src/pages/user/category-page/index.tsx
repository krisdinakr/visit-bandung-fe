import { Breadcrumb, Card, Footer, Hero, Navbar } from 'components';
import hero from 'assets/images/hero.jpg';
import { useLocation } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { CategoryService } from 'services/category';

const CategoryPage = () => {
  const location = useLocation();
  const pathname = location.pathname.slice(1);
  const [places, setPlaces] = useState<Array<any>>([]);

  const fetchPlaces = useCallback(async () => {
    try {
      const categoryService = new CategoryService();
      const result: any = await categoryService.getById(pathname);
      if (result.status === 'success') {
        setPlaces(result.data);
      }
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }, [pathname]);

  useEffect(() => {
    fetchPlaces();
  }, [fetchPlaces]);

  return (
    <div className="category-page">
      <Navbar />
      <Hero img={hero} alt="Monumen Perjuangan Bandung" />
      <div className="container pb-5 pt-4">
        <Breadcrumb
          parent="Things To Do"
          endpoint={pathname.replace(/-/gm, ' ')}
        />
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
            {places.map((places) => (
              <div className="col-md-4" key={places.id}>
                <Card type="secondary" data={places} />
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
