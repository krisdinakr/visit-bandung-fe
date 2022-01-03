import { useCallback, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Input, Select } from 'components';
import { ADMIN_ROUTES } from 'routes';
import AttractionService from 'services/attractions';

const UpdateAttractionPage = () => {
  const { id } = useParams<any>();
  const [isloading, setIsLoading] = useState<Boolean>(false);
  const [name, setName] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [subCategory, setSubCategory] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [images, setImages] = useState<any>(null);
  const history = useHistory();

  const fetchAttraction = useCallback(async () => {
    setIsLoading(true);
    const attractionService = new AttractionService();
    const result: any = await attractionService.getById(id);
    if (result.status === 'success') {
      setName(result.data.name);
      setCategory(result.data.category);
      setSubCategory(result.data.subCategory);
      setDescription(result.data.description);
    }
    setIsLoading(false);
  }, [id]);

  useEffect(() => {
    fetchAttraction();
  }, [fetchAttraction]);

  const handleCancel = () =>
    history.push(`${ADMIN_ROUTES.ATTRACTION_LIST}/${id}`);

  const handleSubmit = () => {
    console.log('name', name);
    console.log('category', category);
    console.log('subCategory', subCategory);
    console.log('description', description);
    console.log('images', images);
  };

  if (isloading)
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
          variant="normal"
          type="text"
          label="name"
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="mb-2 row">
          <label htmlFor="images" className="col-sm-3 col-form-label fw-bold">
            Images
          </label>
          <div className="col-sm-9">
            <input
              className="form-control"
              type="file"
              id="images"
              multiple
              onChange={(e) => setImages(e.target.files)}
            />
          </div>
        </div>
        <div className="d-flex justify-content-end mt-3 gap-3">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleSubmit}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateAttractionPage;
