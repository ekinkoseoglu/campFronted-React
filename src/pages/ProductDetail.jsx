import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Card } from "semantic-ui-react";
import ProductService from "../services/productService";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  let { id } = useParams();

  useEffect(() => {
    let productService = new ProductService();
    productService.getProductByID(id).then((response) => {
      setProduct(response.data.data);
      console.log(response.data.data);
    });
  }, []);

  return (
    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Card.Header>{product.productName}</Card.Header>
            <Card.Meta>
              Product Id: <strong> {product.productId}</strong>
            </Card.Meta>
            <Card.Description>
              Price:<strong> {product.unitPrice} $</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Satın al
              </Button>
              <Button basic color="red">
                Favorilere Ekle
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
};

export default ProductDetail;
