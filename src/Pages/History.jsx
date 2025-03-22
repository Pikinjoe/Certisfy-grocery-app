import { useState, useEffect } from "react";
import { useAuth } from "../AuthContext";

import { assets } from "../Data/assets";
import products from "../Data/products";


const History = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:8000/orders?userId=${user.id}`, {
        headers: {
          'Content-Type' : 'application/json'
        },
      })
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch orders");
          return res.json()
        })
        .then((data) => setOrders(data))
        .catch((error) => {
          console.error('Error fetching orders:', error)
        })
    }
  }, [user]);
  
  return (
    <div className="bg-green-50 min-h-screen">
      <h2 className="text-center font-bold text-xl py-4 text-primary-text md:text-2xl">
        Your Orders
      </h2>
      {orders.length > 0 ? (
         <div className="flex flex-col gap-6 mx-4">
         {orders.map((order) => (
           <div
             key={order.id}
             className="border-2 border-secondary-text bg-secondary-text rounded-2xl shadow-2xl p-4"
           >
             <div className="flex justify-between items-center mb-2">
               <p className="font-bold text-primary-text">
                 Order #{order.id} - {new Date(order.orderDate).toLocaleDateString()}
               </p>
               <p className="text-green-700 font-semibold">
                 Total: ${(order.total).toFixed(2)}
               </p>
             </div>
             {order.items.map((item) => {
               const product = products.find((p) => p.id === item.productId);
               return (
                 <div
                   key={item.productId}
                   className="flex justify-between items-center border-t pt-2"
                 >
                   <div className="flex items-center gap-2">
                     <img
                       src={assets[product?.image] || ""}
                       alt={product?.name || "Product"}
                       className="size-16 rounded-lg"
                       onError={(e) => (e.target.src = "/fallback-image.jpg")} // Optional: Add fallback image
                     />
                     <div>
                       <p className="font-semibold text-primary-text truncate w-32">
                         {item.quantity}x {product?.name || "Unknown"}
                       </p>
                       <p className="text-sm text-gray-600">
                         ${item.price.toFixed(2)} each
                       </p>
                     </div>
                   </div>
                   <span className="text-green-700 font-bold">
                     ${(item.quantity * item.price).toFixed(2)}
                   </span>
                 </div>
               );
             })}
             <div className="mt-2 text-sm text-gray-600">
               <p>Delivery: {new Date(order.deliveryDate).toLocaleDateString()}</p>
               <p>Status: {order.status}</p>
             </div>
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
