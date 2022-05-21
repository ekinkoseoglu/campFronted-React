import React, { useEffect, useState } from "react";
import { Menu } from "semantic-ui-react";
import CategoryService from "../services/categoryService";

const Categories = () => {
  const tempCategories = [];
  const [categories, setCategories] = useState(tempCategories);

  useEffect(() => {
    let categoryService = new CategoryService();
    categoryService
      .getCategories()
      .then((response) => {
        setCategories(response.data.data);
      })
      .catch();
  }, []);
  return (
    <div>
      <Menu pointing vertical>
        {categories.map((category) => (
          <Menu.Item name={category.categoryName} />
        ))}
      </Menu>
    </div>
  );
};

export default Categories;
