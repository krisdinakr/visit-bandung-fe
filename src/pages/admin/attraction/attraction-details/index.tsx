import { Carousel, Input } from 'components';
import { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AttractionService from 'services/attractions';
import { ADMIN_ROUTES } from 'routes';

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

  if (!attraction)
    return (
      <div
        className="container d-flex flex-column justify-content-center align-items-center"
        style={{ height: '70vh' }}
      >
        <div className="spinner-grow text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <span className="mt-3">Loading...</span>
      </div>
    );

  return (
    <div className="border border-2 rounded p-4 mb-5">
      <div className="details">
        <Input
          variant="read-only"
          type="text"
          label="name"
          defaultValue={attraction.name}
        />
        <Input
          variant="read-only"
          type="text"
          label="category"
          defaultValue={attraction.category}
        />
        <Input
          variant="read-only"
          type="text"
          label="subCategory"
          defaultValue={attraction.subCategory}
        />
        <Input
          variant="read-only"
          type="text"
          label="slug"
          defaultValue={attraction.slug}
        />
        <div className="mb-2 row">
          <label
            htmlFor="description"
            className="col-sm-3 col-form-label fw-bold"
          >
            Description
          </label>
          <div className="col-sm-9">
            <textarea
              rows={6}
              readOnly
              className="form-control-plaintext px-2"
              id="description"
              value={attraction.description}
            ></textarea>
          </div>
        </div>
        <div className="mb-2 row">
          <label htmlFor="images" className="col-sm-3 col-form-label fw-bold">
            Images
          </label>
          <div className="col-sm-9 py-3">
            <Carousel images={attraction.images} />
          </div>
        </div>
        <Input
          variant="read-only"
          type="text"
          label="createdAt"
          defaultValue={attraction.createdAt}
        />
        <Input
          variant="read-only"
          type="text"
          label="updatedAt"
          defaultValue={attraction.updatedAt}
        />
        <div className="d-flex justify-content-end mt-3">
          <Link
            className="btn btn-primary mt-3"
            to={`${ADMIN_ROUTES.ATTRACTION_LIST}/update/${id}`}
          >
            Update
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AttractionDetailsPage;
