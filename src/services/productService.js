import axios from "axios";

export default class ProductService {
  constructor(globalAPI) {
    this.globalAPI = "https://localhost:44360/api/products/";
  }
  getProducts = () => {
    const localAPI = "getall";
    return axios.get(this.globalAPI + localAPI);
  };

  getProductByID = (id) => {
    const localAPI = "getbyid?id=";
    return axios.get(this.globalAPI + localAPI + id);
  };

  getByCategoryID = (categoryId) => {
    const localAPI = "getbycategory?categoryId=";
    return axios.get(this.globalAPI + localAPI + categoryId);
  };
}
