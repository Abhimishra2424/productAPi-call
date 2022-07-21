import React = require('react');
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ModelWithForm = ({ show, setShow, selected, setSelected }) => {
  const handleProductUpdate = async (e: any) => {
    e.preventDefault();
    const updateProduct = await axios.put(
      `https://62d8195a9c8b5185c782fec4.mockapi.io/product/${selected.id}`,
      selected
    );
    if (updateProduct.data) {
      toast.success('updated!', {
        position: toast.POSITION.TOP_CENTER,
      });
      setShow(false);
    }
  };

  return (
    <React.Fragment>
      <ToastContainer />
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Product Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => handleProductUpdate(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Product</Form.Label>
              <Form.Control
                type="text"
                value={selected.product}
                onChange={(e) => {
                  setSelected({
                    ...selected,
                    product: e.target.value,
                  });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                value={selected.price}
                onChange={(e) => {
                  setSelected({
                    ...selected,
                    price: e.target.value,
                  });
                }}
              />
            </Form.Group>

            <Modal.Footer>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default ModelWithForm;
