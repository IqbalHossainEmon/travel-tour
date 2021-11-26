import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { HelmetProvider } from "react-helmet-async";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [number, setNumber] = useState(0);
  const handleDelete = (id) => {
    const process = window.confirm(
      "Are You Sure You Want to Delete it? If you are sure press 'ok'"
    );
    if (process) {
      axios.delete(`http://localhost:6969/delete/${id}`).then((res) => {
        if (res.data.deletedCount) {
          const remaining = orders.filter((order) => order._id !== id);
          setOrders(remaining);
        }
      });
    }
  };
  const handleUpdate = (id, order) => {
    const process = window.confirm(
      "Are You Sure You Want to update it to APPROVED? If you are sure press 'ok'"
    );
    if (process) {
      order.state = "Approved";
      axios.put(`http://localhost:6969/update/${id}`, order).then((res) => {
        if (res.data.modifiedCount) {
          setNumber(number + 1);
        }
      });
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:6969/manageOrders")
      .then((result) => setOrders(result.data));
  }, [number]);
  return (
    <div
      style={{
        backgroundImage: "url(https://i.ibb.co/7gs0f7Z/Manage-Orders.png)",
        backgroundSize: "cover",
      }}
      className="h-100 py-5"
    >
      <HelmetProvider>
        <title>Manage Order</title>
      </HelmetProvider>
      <div className="pt-5 text-center">
        <h2 className="mt-5 text-warning">Manage All Orders</h2>
        <Container className="mt-5 text-start">
          <Table className="bg-dark bg-opacity-50" striped bordered hover>
            <thead className="text-white">
              <tr>
                <th className="text-white-50">User Name</th>
                <th className="text-white-50">Travel Area</th>
              </tr>
            </thead>
            <tbody className="text-white">
              {orders.map((order) => (
                <tr key={order._id}>
                  <td className="text-white">{order.userName}</td>
                  <td className="d-lg-flex text-white">
                    <p>{order.travelAddress}</p>
                  </td>
                  <td>
                    <span className="mx-auto text-info">
                      {order.state}
                      <Button
                        onClick={() => handleUpdate(order._id, order)}
                        className="ms-lg-2 my-2    mx-lg-0"
                        variant="outline-info"
                      >
                        Update
                      </Button>
                    </span>
                  </td>
                  <td>
                    <Button
                      onClick={() => handleDelete(order._id)}
                      className="ms-auto"
                      variant="outline-danger"
                    >
                      Cancel
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </div>
    </div>
  );
};

export default ManageOrders;
