import { Carousel } from 'components';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AttractionService from 'services/attractions';

const AttractionDetailsPage = () => {
  const { id } = useParams<any>();
  const [attraction, setAttraction] = useState<null | any>(null);

  const fetchAttraction = useCallback(async () => {
    const attractionService = new AttractionService();
    const result: any = await attractionService.getById(id);
    console.log(result.data);
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
            <Carousel images={attraction.images} />
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
