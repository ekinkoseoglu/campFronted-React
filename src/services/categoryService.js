import { axios } from "axios";

export default class CategoryService {
  constructor(globalAPI) {
    this.globalAPI = "https://localhost:44360/api/categories/";
  }

  getCategories = () => {
    const localAPI = "getall";
    return axios.get(this.globalAPI + localAPI);
  };

  getByCategoryID = (id) => {
    const localAPI = "getbyid?id=";
    return axios.get(this.globalAPI + localAPI + id);
  };
}
