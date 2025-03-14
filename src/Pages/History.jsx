import { useState, useEffect } from "react";
import { useAuth } from "../AuthContext";

import { assets } from "../Data/assets";
import products from "../Data/products";


const History = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:8000/orders?userId=${user.id}`)
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }
  }, [user]);
  return (
    <div className="bg-green-50 min-h-screen">
      <h2 className="text-center font-bold text-xl py-4 text-primary-text md:text-2xl">
        Your Orders
      </h2>
      {orders.length > 0 ? (
        <div
          className="flex
      flex-col gap-3 md:flex-row md:flex-wrap"
        >
          {orders.map((order) => (
            <div
              className="flex justify-between items-center mx-4 border-2 border-secondary-text bg-secondary-text rounded-2xl shadow-2xl sm:w-64"
              key={order.id}
            >
              <img
                src={assets[products.image]}
                alt={products.name}
                className="size-24 rounded-2xl"
              />
              <p className="font-semibold text-primary-text truncate text-ellipsis w-32 md:pl-2">{`${Cart.quantity}x ${products.name}`}</p>
              <span className="self-end pr-2 text-green-700 font-bold">{`(${Cart.quantity} * ${products.price}).00`}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-56">
          <p className="text-2xl md:text-5xl text-primary-text">
            No Orders Yet
          </p>
        </div>
      )}
    </div>
  );
};

export default History;
