import { Input, Select } from 'components';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AttractionService from 'services/attractions';

const UpdateAttractionPage = () => {
  const { id } = useParams<any>();
  const [place, setPlace] = useState<null | any>(null);
  const [isloading, setIsLoading] = useState<Boolean>(true);
  const [name, setName] = useState<string>();
  const [category, setCategory] = useState<string>('');
  const [subCategory, setSubCategory] = useState<string>();

  const fetchAttraction = useCallback(async () => {
    const attractionService = new AttractionService();
    const result: any = await attractionService.getById(id);
    if (result.status === 'success') {
      setPlace(result.data);
    }
    setIsLoading(false);
  }, [id]);

  useEffect(() => {
    fetchAttraction();
  }, [fetchAttraction]);

  if (isloading) return <p>Loading...</p>;

  return (
    <div className="border border-2 rounded p-4 mb-5">
      <div className="details">
        <Input
          variant="normal"
          type="text"
          label="name"
          defaultValue={place.name}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="mb-2 row">
          <label
            htmlFor="category"
            className="col-sm-3 col-form-label fw-bold text-capitalize"
          >
            Category
          </label>
          <div className="col-sm-9">
            <Select
              variant="category"
              category={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-2 row">
          <label
            htmlFor="subCategory"
            className="col-sm-3 col-form-label fw-bold text-capitalize"
          >
            Sub Category
          </label>
          <div className="col-sm-9">
            <Select
              variant="subCategory"
              category={category}
              subCategory={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
            />
          </div>
        </div>
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
              className="form-control-plaintext px-2"
              id="description"
              defaultValue={place.description}
            ></textarea>
          </div>
        </div>
        <div className="mb-2 row">
          <label htmlFor="images" className="col-sm-3 col-form-label fw-bold">
            Images
          </label>
          <div className="col-sm-9">
            <input className="form-control" type="file" id="images" multiple />
          </div>
        </div>
        <div className="d-flex justify-content-end mt-3 gap-3">
          <button type="button" className="btn btn-primary">
            Cancel
          </button>
          <button type="button" className="btn btn-secondary">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateAttractionPage;
