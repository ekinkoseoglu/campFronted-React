import React from "react";
import { Route } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import CategoryList from "../pages/CategoryList";
import ProductList from "../pages/ProductList";
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <CategoryList />
          </Grid.Column>

          <Grid.Column width={12}>
            <Route exact path="/" component={ProductList} />
            <Route exact path="/products" component={ProductList} />
            <Route exact path="/products/:id" component={ProductDetail} />
            <Route exact path="/cart" component={CartDetail} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Dashboard;
