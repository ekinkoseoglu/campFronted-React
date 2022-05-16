import React from "react";
import { useEffect, useState } from "react/cjs/react.production.min";
import { Table } from "semantic-ui-react";
import CategoryService from "../services/categoryService";

const CategoryList = () => {
  const tempCategories = [];
  const [categories, setCategories] = useState(tempCategories);

  useEffect(() => {
    let categoryService = new CategoryService();
    categoryService.getCategories().then((response) => {
      setCategories(response.data.data).catch();
    });
  }, []);

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Category Name</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {categories.map((category) => {
          <Table.Row key={category.CategoryId}>
            <Table.Cell>{category.CategoryName}</Table.Cell>
          </Table.Row>;
        })}
      </Table.Body>

      <Table.Footer></Table.Footer>
    </Table>
  );
};

export default CategoryList;
