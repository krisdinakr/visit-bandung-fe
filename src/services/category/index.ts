import BaseService from 'services';

export class CategoryService extends BaseService {
  constructor() {
    super(`${process.env.REACT_APP_BACKEND_URL}/places/category`);
  }
}
