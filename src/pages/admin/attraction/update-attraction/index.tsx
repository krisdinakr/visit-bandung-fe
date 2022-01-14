import { useCallback, useEffect, useMemo, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Input, Select, Alert } from 'components';
import { ADMIN_ROUTES } from 'routes';
import AttractionService from 'services/attractions';

type NotificationType = {
  type: 'error' | 'info';
  message: string;
};

const UpdateAttractionPage = () => {
  const { id } = useParams<any>();
  const [isloading, setIsLoading] = useState<Boolean>(false);
  const [name, setName] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [subCategory, setSubCategory] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [images, setImages] = useState<any>(null);
  const [notification, setNotification] = useState<NotificationType | null>(
    null
  );
  const history = useHistory();
  const attractionService = useMemo(() => new AttractionService(), []);

  const fetchAttraction = useCallback(async () => {
    setIsLoading(true);
    const result: any = await attractionService.getById(id);
    if (result.status === 'success') {
      setName(result.data.name);
      setCategory(result.data.category);
      setSubCategory(result.data.subCategory);
      setDescription(result.data.description);
      setImages(result.data.images);
    }
    setIsLoading(false);
  }, [id, attractionService]);

  useEffect(() => {
    fetchAttraction();
  }, [fetchAttraction]);

  const handleCancel = () => history.push(`${ADMIN_ROUTES.PLACE_LIST}/${id}`);

  const handleSubmit = useCallback(async () => {
    const data = {
      name,
      category,
      subCategory,
      description,
      images,
    };
    try {
      const updateResult: any = await attractionService.patch(id, data);
      if (updateResult.status === 'success') {
        setNotification({
          type: 'info',
          message: `${updateResult.data[0].name} successfully updated!`,
        });
        setTimeout(() => {
          setNotification(null);
        }, 4000);
      }
    } catch (err: any) {
      console.log(err);
      setNotification({ type: 'error', message: err.message });
      setTimeout(() => {
        setNotification(null);
      }, 4000);
    }
  }, [id, name, category, subCategory, description, images, attractionService]);

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
      {notification && (
        <Alert type={notification.type} message={notification.message} />
      )}
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
