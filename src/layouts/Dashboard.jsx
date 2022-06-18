import React from "react";
import { Route, Routes } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import CategoryList from "../pages/CategoryList";
import ProductList from "../pages/ProductList";
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail";
import "./Dashboard.css";
import AddProduct from "../pages/AddProduct";
import { useLocation } from "react-router-dom";
const Dashboard = () => {
  let location = useLocation();
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Routes>
              <Route exact path="/products" element={<CategoryList />} />
            </Routes>
          </Grid.Column>

          <Grid.Column width={12}>
            <Routes>
              <Route exact path="/" element={<ProductList />} />
              <Route exact path="/products" element={<ProductList />} />
              <Route
                exact
                path="/products/:productId"
                element={<ProductDetail />}
              />
              <Route exact path="/products/add" element={<AddProduct />} />
              <Route exact path="/cart" element={<CartDetail />} />
            </Routes>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Dashboard;
