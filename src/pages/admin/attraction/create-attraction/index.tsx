import { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Input, Select } from 'components';
import AttractionService from 'services/attractions';
import { ADMIN_ROUTES } from 'routes';

const CreateAttractionPage: FC = () => {
  const [name, setName] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [subCategory, setSubCategory] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [images, setImages] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const history = useHistory();

  const handleSubmit = async () => {
    setIsLoading(true);
    const data = new FormData();
    data.append('name', name);
    data.append('category', category);
    data.append('subCategory', subCategory);
    data.append('description', description);
    for (const key in images) {
      if (typeof images[key] === 'object') {
        data.append('images', images[key]);
      }
    }
    const attractionService = new AttractionService();
    const response: any = await attractionService.post(data);
    console.log('response', response);
    setIsLoading(false);
    history.push(ADMIN_ROUTES.PLACE_LIST);
  };

  return (
    <div className="border border-2 rounded p-4 mb-5">
      <div className="form">
        <Input
          variant="floating"
          type="text"
          label="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="form-floating mb-3">
          <Select
            variant="category"
            category={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <label htmlFor="category">Category</label>
        </div>
        <div className="form-floating mb-3">
          <Select
            variant="subCategory"
            category={category}
            subCategory={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
          />
          <label htmlFor="subCategory">Sub Category</label>
        </div>
        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            placeholder="Description"
            id="description"
            style={{ height: 200 }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <label htmlFor="description">Description</label>
        </div>
        <div className="mb-3">
          <label htmlFor="images" className="form-label">
            Images
          </label>
          <input
            className="form-control"
            type="file"
            id="images"
            name="images"
            multiple
            onChange={(e) => setImages(e.target.files)}
          />
        </div>
        <div className="d-flex justify-content-end pt-2">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {!isLoading && <span>Submit</span>}
            {isLoading && <span>Loading...</span>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateAttractionPage;
