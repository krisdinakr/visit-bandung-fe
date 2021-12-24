import { Carousel, Input } from 'components';
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
        <Input
          variant="read-only"
          type="text"
          label="name"
          value={attraction.name}
        />
        <Input
          variant="read-only"
          type="text"
          label="category"
          value={attraction.category}
        />
        <Input
          variant="read-only"
          type="text"
          label="subCategory"
          value={attraction.subCategory}
        />
        <Input
          variant="read-only"
          type="text"
          label="slug"
          value={attraction.slug}
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
          value={attraction.createdAt}
        />
        <Input
          variant="read-only"
          type="text"
          label="updatedAt"
          value={attraction.updatedAt}
        />
        <button type="button" className="btn btn-primary mt-3">
          Edit
        </button>
      </div>
    </div>
  );
};

export default AttractionDetailsPage;
