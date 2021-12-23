import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AttractionService from 'services/attractions';

const AttractionDetailsPage = () => {
  const { id } = useParams<any>();
  const [attraction, setAttraction] = useState<null | any>(null);

  const fetchAttraction = useCallback(async () => {
    const attractionService = new AttractionService();
    const result: any = await attractionService.getById(id);
    if (result.status === 'success') {
      setAttraction(result.data);
    }
  }, [id]);

  useEffect(() => {
    fetchAttraction();
  }, [fetchAttraction]);

  if (!attraction) return <p>Loading...</p>;

  return (
    <div className="border border-2 rounded p-4 mb-5">
      <div className="details">
        <div className="mb-1 row">
          <label htmlFor="name" className="col-sm-3 col-form-label">
            Name
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              readOnly
              className="form-control-plaintext px-2"
              id="name"
              value={attraction.name}
            />
          </div>
        </div>
        <div className="mb-1 row">
          <label htmlFor="category" className="col-sm-3 col-form-label">
            Category
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              readOnly
              className="form-control-plaintext px-2"
              id="category"
              value={attraction.category}
            />
          </div>
        </div>
        <div className="mb-1 row">
          <label htmlFor="subCategory" className="col-sm-3 col-form-label">
            Sub Category
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              readOnly
              className="form-control-plaintext px-2"
              id="subCategory"
              value={attraction.subCategory}
            />
          </div>
        </div>
        <div className="mb-1 row">
          <label htmlFor="slug" className="col-sm-3 col-form-label">
            Slug
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              readOnly
              className="form-control-plaintext px-2"
              id="slug"
              value={attraction.slug}
            />
          </div>
        </div>
        <div className="mb-1 row">
          <label htmlFor="description" className="col-sm-3 col-form-label">
            Description
          </label>
          <div className="col-sm-9">
            <textarea
              rows={5}
              readOnly
              className="form-control-plaintext px-2"
              id="description"
              value={attraction.description}
            ></textarea>
          </div>
        </div>
        <div className="mb-1 row">
          <label htmlFor="images" className="col-sm-3 col-form-label">
            Images
          </label>
          <div className="col-sm-9">
            <div
              id="carouselExampleIndicators"
              className="carousel slide w-auto"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={attraction.images[0]} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={attraction.images[0]} className="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div className="mb-1 row">
          <label htmlFor="createdAt" className="col-sm-3 col-form-label">
            Created At
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              readOnly
              className="form-control-plaintext px-2"
              id="createdAt"
              value={attraction.createdAt}
            />
          </div>
        </div>
        <div className="mb-1 row">
          <label htmlFor="updatedAt" className="col-sm-3 col-form-label">
            Updated At
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              readOnly
              className="form-control-plaintext px-2"
              id="updatedAt"
              value={attraction.updatedAt}
            />
          </div>
        </div>
        <button type="button" className="btn btn-primary mt-3">
          Edit
        </button>
      </div>
    </div>
  );
};

export default AttractionDetailsPage;
