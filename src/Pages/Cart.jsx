import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../AuthContext";

import { assets } from "../Data/assets";
import products from "../Data/products";
import { toast } from "react-toastify";

const Cart = () => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState({});
  const [carts, setCarts] = useState([]);

  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:8000/cart?userId=${user.id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.length > 0) {
            setCarts(data);

            const initialQuantities = data.reduce((acc, cart) => {
              carts.items.forEach((item) => {
                acc[item.id] = item.quantity || 1;
              });
              return acc;
            }, {});
            setCartItems(initialQuantities);
          }
        })
        .catch((error) => {
          console.error("Error fetching cart:", error);
          toast.error("Failed to load cart items.");
        });
    }
  }, [user]);

  const addItem = (itemId, cartId) => {
    setCartItems((prev) => {
      const newQuantity = (prev[itemId] || o) + 1;
      const updatedItems = { ...prev, [itemId]: newQuantity };

      updateCartBackend(cartId, itemId, newQuantity);
      return updatedItems;
    });
  };

  const removeItem = (itemId, cartId) => {
    setCartItems((prev) => {
      const currentQuantity = prev[itemId] || 0;
      if (currentQuantity <= 0) {
        toast.warn("Cannot remove more items.");
        return prev;
      }
      const newQuantity = currentQuantity - 1;
      const updatedItems = { ...prev, [itemId]: newQuantity };

      updateCartBackend(cartId, itemId, newQuantity);
      return updatedItems;
    });
  };

  const updateCartBackend = (cartId, itemId, newQuantity) => {
    fetch(`http://localhost:8000/cart?userId=${user.id}`)
      .then((res) => res.json())
      .then((data) => {
        const cart = data.find((c) => c.id === cartId);
        if (cart) {
          const updatedItems = cart.items.map((item) =>
            item.id === itemId ? { ...item, quantity: newQuantity } : item
          );

          const filteredItems = updatedItems.filter(
            (item) => item.quantity > 0
          );
          fetch(`http://localhost:8000/cart/${cartId}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ ...cart, items: filteredItems }),
          })
            .then(() => {
              fetch(`http://localhost:8000/cart?userId=${user.id}`)
                .then((res) => res.json())
                .then((data) => setCarts(data));
            })
            .catch((error) => {
              console.error("Error updating cart:", error);
              toast.error("Failed to update cart.");
            });
        }
      });
  };

  return (
    <div className="bg-green-50 min-h-screen">
      <h2 className="text-center font-bold text-xl py-4 text-primary-text md:text-2xl">
        Cart
      </h2>
      <div className="mx-4 my-6 flex items-center justify-between">
        <p className="text-xl font-bold text-primary-text">Items</p>
        <button
          className="font-semibold text-primary cursor-pointer"
          onClick={() => navigate("/categories")}
        >
          <span className="mx-1 text-white bg-primary w-4 px-1 rounded py-0.5 ">
            +
          </span>
          Add More
        </button>
      </div>

      {carts.length > 0 ? (
      <div className="flex flex-col gap-3 md:flex-row md:flex-wrap">
        
          carts.map((cart) =>
            cart.items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center mx-4 border-2 border-secondary-text bg-secondary-text rounded-2xl shadow-2xl sm:w-64"
              >
                <img
                  src={assets[item.image]}
                  alt={item.name}
                  className="size-24 rounded-2xl"
                />
                <div className="w-32 md:pl-2 flex flex-col gap-4">
                  <p className="font-bold capitalize text-primary-text truncate text-ellipsis ">
                    {item.name}
                  </p>
                  <p className="text-red-600 font-semibold">
                    {`${item.price}/`}
                    <span>{item.size}</span>
                  </p>
                </div>
                <div className="bg-primary w-20 self-end mb-2 mr-2 rounded flex justify-between items-center px-1 text-white">
                  <span
                    className="bg-secondary-text text-primary font-bold text-lg w-4 h-4 flex justify-center items-center rounded"
                    onClick={() => removeItem(item.id, cart.id)}
                  >
                    -
                  </span>
                  <span>{cartItem[item.id] || 0}</span>
                  <span
                    className="bg-secondary-text text-primary font-bold text-lg w-4 h-4 flex justify-center items-center rounded"
                    onClick={() => addItem(item.id, cart.id)}
                  >
                    +
                  </span>
                </div>
              </div>
            ))
          )
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

export default Cart;
