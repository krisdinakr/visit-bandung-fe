import { Input, Select } from 'components';
import { useState } from 'react';

const CreateAttractionPage = () => {
  const [name, setName] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [subCategory, setSubCategory] = useState<string>('');

  return (
    <div className="border border-2 rounded p-4 mb-5">
      <form>
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
          ></textarea>
          <label htmlFor="description">Description</label>
        </div>
        <div className="mb-3">
          <label htmlFor="images" className="form-label">
            Images
          </label>
          <input className="form-control" type="file" id="images" multiple />
        </div>
        <div className="d-flex justify-content-end pt-2">
          <button type="button" className="btn btn-secondary">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAttractionPage;
