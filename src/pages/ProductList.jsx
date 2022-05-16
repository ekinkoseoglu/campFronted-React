import React, { useState, useEffect } from "react";
import { Icon, Menu, Table } from "semantic-ui-react";
import ProductService from "../services/productService";

const ProductList = () => {
  const temporaryProducts = [];
  const [products, setProducts] = useState(temporaryProducts);

  useEffect(() => {
    console.log("Selam");
    let productService = new ProductService();
    productService
      .getProducts()
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch();
  }, []);
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Product Name</Table.HeaderCell>
            <Table.HeaderCell>Unit Price</Table.HeaderCell>
            <Table.HeaderCell>Units in Stock</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {products.map((product) => (
            <Table.Row key={product.productId}>
              <Table.Cell>{product.productName}</Table.Cell>
              <Table.Cell>{product.unitPrice}</Table.Cell>
              <Table.Cell>{product.unitsInStock}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
};

export default ProductList;
