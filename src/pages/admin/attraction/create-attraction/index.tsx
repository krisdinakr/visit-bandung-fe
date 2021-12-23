const CreateAttractionPage = () => {
  return (
    <div className="border border-2 rounded p-4 mb-5">
      <form>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="name"
          />
          <label htmlFor="name">Name</label>
        </div>
        <div className="form-floating mb-3">
          <select
            className="form-select"
            id="category"
            aria-label="Category Field"
          >
            <option selected disabled>
              Select Category
            </option>
            <option value={'CULTURE & ART'}>CULTURE &amp; ART</option>
            <option value={'SHOPPING'}>SHOPPING</option>
            <option value={'NATURE'}>NATURE</option>
            <option value={'CULINARY'}>CULINARY</option>
            <option value={'HISTORY & HERITAGE'}>HISTORY &amp; HERITAGE</option>
          </select>
          <label htmlFor="category">Category</label>
        </div>
        <div className="form-floating mb-3">
          <select
            className="form-select"
            id="subCategory"
            aria-label="Sub Category Field"
          >
            <option selected disabled>
              Select SubCategory
            </option>
            {/* <option value={'CULTURE & ART'}>CULTURE &amp; ART</option>
            <option value={'SHOPPING'}>SHOPPING</option>
            <option value={'NATURE'}>NATURE</option>
            <option value={'CULINARY'}>CULINARY</option>
            <option value={'HISTORY & HERITAGE'}>HISTORY &amp; HERITAGE</option> */}
          </select>
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
