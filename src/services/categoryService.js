import axios from "axios";

export default class CategoryService {
  getCategories = () => {
    const localAPI = "https://localhost:44360/api/categories/getall";
    return axios.get(localAPI);
  };

  getByCategoryID = (id) => {
    const localAPI = "https://localhost:44360/api/categories/getbyid?id=";
    return axios.get(localAPI + id);
  };
}
