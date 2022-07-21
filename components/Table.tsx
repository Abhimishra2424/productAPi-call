import axios from 'axios';
import React = require('react');
import Button from 'react-bootstrap/esm/Button';
import ModelWithForm from './ModelWithForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Table = () => {
  const [product, setProduct] = React.useState([]);
  const [selected, setSelected] = React.useState({});
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const getallProduct = async () => {
      let { data } = await axios.get(
        'https://62d8195a9c8b5185c782fec4.mockapi.io/product'
      );
      setProduct(data);
    };
    getallProduct();
  }, [show]);

  function hendleEdit(val: {}) {
    setSelected(val);
    setShow(true);
  }

  const hendleDelete = async (val: {}) => {
    const { data } = await axios.delete(
      `https://62d8195a9c8b5185c782fec4.mockapi.io/product/${val.id}`
    );
    if (data) {
      let getALlProduct = await axios.get(
        'https://62d8195a9c8b5185c782fec4.mockapi.io/product'
      );
      toast.success('Deleted!', {
        position: toast.POSITION.TOP_CENTER,
      });
      setProduct(getALlProduct.data);
    }
  };
  return (
    <div>
      <ToastContainer />
      <table>
        <tr>
          <th>ID</th>
          <th>Product</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
        {product.map((val, id) => {
          return (
            <tr key={id}>
              <td>{val.id}</td>
              <td>{val.product}</td>
              <td>{val.price}</td>
              <Button variant="success" onClick={() => hendleEdit(val)}>
                Edit
              </Button>
              <Button onClick={() => hendleDelete(val)}>Delete</Button>
            </tr>
          );
        })}
      </table>
      <ModelWithForm
        setShow={setShow}
        show={show}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
};

export default Table;
