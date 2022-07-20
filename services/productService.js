import axios from 'axios';
import BaseService from './BaseService';

class ProductService extends BaseService {
  constructor() {
    super();
    // set the base URL & API Key if required.
    this.isIntegrated = true; // Make it true when the integration will be in place.
  }
  async getAllProduct() {
    try {
      const url = this.ApiEndPoint;
      const { data } = await axios.get(url);
      return data;
    } catch (err) {
      throw err;
    }
  }
}

export default ProductService;
