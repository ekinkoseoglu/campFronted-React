import React from "react";
import { Grid } from "semantic-ui-react";
import CategoryList from "../pages/CategoryList";
import ProductList from "../pages/ProductList";

const Dashboard = () => {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <CategoryList />
          </Grid.Column>

          <Grid.Column width={12}>
            <ProductList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Dashboard;
