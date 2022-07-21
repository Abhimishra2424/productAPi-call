import axios from 'axios';
import * as React from 'react';
import Container from 'react-bootstrap/cjs/Container';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [product, setProduct] = React.useState('');
  const [price, setPrice] = React.useState('');

  const navigate = useNavigate();

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const payload = {
      product: product,
      price: price,
    };

    const saveProduct = await axios.post(
      'https://62d8195a9c8b5185c782fec4.mockapi.io/product',
      payload
    );

    if (saveProduct.data) {
      navigate('/', { replace: true });
    }
  };

  return (
    <Container>
      <Form onSubmit={(e) => handleAddProduct(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product</Form.Label>
          <Form.Control
            type="text"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>

        <Button type="submit">Add New Product</Button>
      </Form>
    </Container>
  );
};

export default AddProduct;
