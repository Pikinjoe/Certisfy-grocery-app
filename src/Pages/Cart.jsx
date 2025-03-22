import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../AuthContext";

import { assets } from "../Data/assets";
import products from "../Data/products";
import { toast } from "react-toastify";

const Cart = () => {
  const navigate = useNavigate();

  const [quantities, setQuantities] = useState({});
  const [carts, setCarts] = useState([]);
  const [selectedDelivery, setSelectedDelivery] = useState(null)
  const [isOrdering, setIsOrdering] = useState(false)

  const { user } = useAuth();

  const currentDate = new Date()

  const deliveryOptions = [
    {days: 5, cost: 0.00, label: 'Standard (5 days)'},
    {days: 3, cost: 4.99, label: 'Standard (3 days)'},
    {days: 1, cost: 9.99, label: 'Standard (1 days)'},
  ]

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:8000/cart?userId=${user.id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (!res.ok) throw new Error(`Failed to fetch cart: ${res.status}`);
          return res.json();
        })
        .then((data) => {
          setCarts(data);

          const initialQuantities = {}
          data.forEach((item) => {
            initialQuantities[item.productId] = 1
          })
          setQuantities(initialQuantities)
          setSelectedDelivery(deliveryOptions[0])
        })
        .catch((error) => {
          console.error("Error fetching cart:", error);
          toast.error("Failed to load cart items.");
        });
    } else {
      setCarts([]);
    }
  }, [user]);

  const cartProducts = carts.map((cart) => ({
    ...products.find((product) => product.id === cart.productId),
    cartId: cart.id
  })
  );

  const addItem = (productId) => {
    setQuantities((prev) => ({
      ...prev, [productId]: (prev[productId] || 0) + 1
    }))
  }

  const removeItem = (productId, cartId) => {
    setQuantities((prev) => {
      const newQty = (prev[productId] || 1) -1
      if (newQty <= 0) {
        fetch(`http://localhost:8000/cart/${cartId}`, {
          method: 'DELETE',
        })
        .then(() => {
          setCarts((preCarts) => preCarts.filter((cart) => cart.id !== cartId))
        })
        .catch((error) => {
          console.error('Error removing item:', error)
          toast.error('Failed to remove item')
        })
        return { ...prev, [productId]: 0 }
      }
      return { ...prev, [productId]: newQty }
    })
  }

  const getSubTotal = () => {
    return cartProducts.reduce(
      (sum, product) => sum + product.price * (quantities[product.id] || 1 ),
      0
    )
  }

  const placeOrder = async () => {
    if (!selectedDelivery) {
      toast.error('Please select a delivery option')
      return
    }
    setIsOrdering(true)
    const orderData = {
      userId: user.id,
      items: cartProducts.map((product) => ({
        productId: product.id,
        quantity: quantities[product.id] || 1,
        price: product.price
      })),
      subtotal: getSubTotal(),
      shipping: selectedDelivery.cost,
      tax: getSubTotal() * 0.1,
      total: getSubTotal() + (getSubTotal() * 0.1) + selectedDelivery.cost,
      deliveryDate: new Date(currentDate.getTime() + selectedDelivery.days * 24 * 60 * 60 * 1000).toISOString(),
      orderDate: new Date().toISOString(),
      status: 'placed'
    }

    try {
    const orderResponse = await fetch('http://localhost:8000/orders', {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(orderData)
    })
    if (!orderResponse.ok) { throw new Error(`Failed to place order: ${orderResponse.status}`);
  }
  
    const deletePromises = carts.map((cart) => fetch(`http://localhost:8000/cart/${cart.id}`, {
          method: 'DELETE',
        })
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to delete cart item ${cart.id}`);
        return res
      })
    );

    await Promise.all(deletePromises);

    toast.success('Order placed successfully')
        setTimeout(() => {
          setCarts([])
          setQuantities({})
          setIsOrdering(false)
          navigate('/history')
        }, 1000)
      } catch(error) {
      console.error('Error placing order:', error)
      toast.error('Failed to placed order')
      setIsOrdering(false)
    }
  }

  const shipping = selectedDelivery?.cost || 0
  const taxRate = 0.1
  const subtotal = getSubTotal()
  const tax = subtotal * taxRate
  const total = subtotal + tax + shipping

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

      {cartProducts.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {cartProducts.map((product) => (
              <div
                key={product.id}
                className="flex justify-between items-center mx-4 bg-secondary-text rounded-2xl shadow-2xl"
              >
                <img
                  src={assets[product.image]}
                  alt={product.name}
                  className="size-24 rounded-2xl"
                />
                <div className="w-32 md:pl-2 flex flex-col gap-4">
                  <p className="font-bold capitalize text-primary-text truncate text-ellipsis ">
                    {product.name}
                  </p>
                  <p className="text-red-600 font-semibold">
                    {`${product.price} / `}
                    <span>{product.size}</span>
                  </p>
                </div>
                <div className="self-end flex flex-col gap-2">
                  <p className="font-semibold text-primary">{`$${(
                    product.price * (quantities[product.id] || 1)).toFixed(2)
                  }`}</p>
                  <div className="bg-primary w-20  mb-2 mr-2 rounded flex justify-between items-center px-1 text-white">
                    <span
                      className="bg-secondary-text text-primary font-bold text-lg w-4 h-4 flex justify-center items-center rounded cursor-pointer"
                      onClick={() => removeItem(product.id, product.cartId)}
                    >
                      -
                    </span>
                    <span>{quantities[product.id] || 1 }</span>
                    <span
                      className="bg-secondary-text text-primary font-bold text-lg w-4 h-4 flex justify-center items-center rounded cursor-pointer"
                      onClick={() => addItem(product.id)}
                    >
                      +
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <div>
              <p className="capitalize font-bold text-xl ml-4">delivery time</p>
              <div className="grid grid-cols-1 sm:w-96 gap-4 py-4">
                {deliveryOptions.map(option => {
                  const deliveryDate = new Date(currentDate.getTime() + option.days * 24 * 60 * 60 * 1000 )
                  return (
                    <div className="flex justify-between items-center mx-4 px-4 bg-secondary-text rounded-2xl shadow-2xl inset-shadow-sm py-2" key={option.days}>
                  <input type="radio"checked={selectedDelivery?.days === option.days} onChange={() => setSelectedDelivery(option)} className="size-6" />
                  <div>
                    <p className="text-primary capitalize">
                      <span>{option.label},</span> {deliveryDate.toLocaleDateString()}
                    </p>
                    <p className="capitalize font-semibold">{option.cost === 0 ? 'Free - shipping' : `$${option.cost.toFixed(2)} - shipping`}</p>
                  </div>
                </div>
                  ) 
                })}
              </div>
            </div>

            <div>
              <p className="capitalize font-bold text-xl ml-4">
                delivery instruction
              </p>
              <div className="grid grid-cols-1 sm:w-96 gap-4 py-4">
                <div className="flex justify-between items-center mx-4 px-4 bg-secondary-text rounded-2xl shadow-2xl inset-shadow-sm py-2">
                  <input type="radio" name="delivery-mode"
                  className="size-6" />
                  <p className="capitalize font-semibold">pay on delivery</p>
                </div>

                <div className="flex justify-between items-center mx-4 px-4 bg-secondary-text rounded-2xl shadow-2xl inset-shadow-sm py-2">
                  <input type="radio" name="delivery-mode" className="size-6" />
                  <p className="capitalize font-semibold">
                    pay before delivery
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:w-96 mx-4 mt-5">
              <p className="capitalize font-bold text-xl">order summary</p>
              <div className="flex justify-between items-center mt-4">
                <p className="capitalize ">
                  items ( <span className="font-bold">{cartProducts.length}</span> )
                </p>
                <p className="text-primary">${subtotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between items-center mt-3">
                <p className="capitalize ">shipping & handling</p>
                <p className="text-primary">${shipping.toFixed(2)}</p>
              </div>
              <div className="flex justify-between items-center mt-3">
                <p className="capitalize ">total before tax</p>
                <p className="text-primary">${subtotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between items-center mt-3">
                <p className="capitalize ">estimated tax (10%)</p>
                <p className="text-primary">${tax.toFixed(2)}</p>
              </div>
              <div className="flex justify-between items-center mt-3 text-primary font-bold text-lg my-4">
                <p className="capitalize">order total</p>
                <p className="text-primary">${total.toFixed(2)}</p>
              </div>

              <button className="bg-primary w-full text-white p-4 rounded-md mb-2 hover:opacity-80 text-lg font-semibold cursor-pointer" onClick={placeOrder} disabled={isOrdering}>{isOrdering ? 'Order Placed' : 'Place Your Order'}</button>
            </div>
          </div>
        </>
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
