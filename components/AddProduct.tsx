import * as React from 'react';
import Container from 'react-bootstrap/cjs/Container';
import Form from 'react-bootstrap/Form';

const AddProduct = () => {
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default AddProduct;
