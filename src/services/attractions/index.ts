import BaseService from 'services';

class AttractionService extends BaseService {
  constructor() {
    super(`${process.env.REACT_APP_BACKEND_URL}/attractions`);
  }
}

export default AttractionService;
