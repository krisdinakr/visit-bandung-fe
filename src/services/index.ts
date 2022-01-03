import axios from 'axios';

abstract class BaseService {
  private readonly ROOT_URL: string;

  constructor(url: string) {
    this.ROOT_URL = url;
  }

  public get = (params?: any, headers?: any) => {
    return new Promise((resolve, reject) => {
      axios
        .get(this.ROOT_URL, {
          params,
          headers,
        })
        .then((response) => resolve(response.data))
        .catch((error) => reject(error));
    });
  };

  public getById = (id: string, params?: any, headers?: any) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${this.ROOT_URL}/${id}`, {
          params,
          headers,
        })
        .then((response) => resolve(response.data))
        .catch((error) => reject(error));
    });
  };

  public post = (data: any, headers?: any) => {
    return new Promise((resolve, reject) => {
      axios
        .post(this.ROOT_URL, data, headers)
        .then((response) => resolve(response.data))
        .catch((error) => reject(error));
    });
  };
}

export default BaseService;
