import axios from "axios";

export default class ProductService {
  getProducts = () => {
    return axios.get("https://localhost:44360/api/Products/getall");
  };
}
