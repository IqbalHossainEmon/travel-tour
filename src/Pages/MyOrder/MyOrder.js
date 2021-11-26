import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Spinner, Table } from "react-bootstrap";
import { HelmetProvider } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  const email = user.email;
  useEffect(() => {
    axios
      .get(`http://localhost:6969/myOrder?email=${email}`, {
        headers: { authorization: localStorage.getItem("idToken") },
      })
      .then((result) => setOrders(result.data));
  }, [email]);
  const handleDelete = (id) => {
    const process = window.confirm(
      "Are You Sure You Want to Delete it? If you are sure press 'ok'"
    );
    if (process) {
      axios
        .delete(`https://desolate-plateau-96499.herokuapp.com/delete/${id}`)
        .then((res) => {
          if (res.data.deletedCount) {
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
          }
        });
    }
  };
  return (
    <div
      style={{
        backgroundImage: "url(https://i.ibb.co/3R86Zh7/myOrders.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="py-5 h-100 text-center"
    >
      <HelmetProvider>
        <title>My Order</title>
      </HelmetProvider>
      <h2 className="mt-5 text-dark">My Orders</h2>
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
                  <span className="mx-auto text-info">{order.state}</span>
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
  );
};

export default MyOrder;
