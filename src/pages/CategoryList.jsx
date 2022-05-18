import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import CategoryService from "../services/categoryService";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let categoryService = new CategoryService();
    categoryService
      .getCategories()
      .then((response) => {
        setCategories(response.data.data);
        console.log(response.data.data);
      })
      .catch();
  }, []);

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Category Name</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {categories.map((category) => (
          <Table.Row key={category.categoryId}>
            <Table.Cell>{category.categoryName}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>

      <Table.Footer></Table.Footer>
    </Table>
  );
};

export default CategoryList;
