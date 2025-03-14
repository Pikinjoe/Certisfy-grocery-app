import { useState, useEffect } from "react";
import { useAuth } from "../AuthContext";

import { assets } from "../Data/assets";
import products from "../Data/products";

const Favorites = () => {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:8000/favorites?userId=${user.id}`, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch favorites");
          return res.json()
        })
        .then((data) => {
          console.log('Fetched favorites:', data);
          setFavorites(data) 
        })
        .catch((error) => {
          console.error('Error fetching favorites:', error)
          setFavorites([])
        })
        
    } else { 
      setFavorites([])
    }
  }, [user]);

  const favoriteProducts = favorites.map((favorite) => products.find((product) => product.id === favorite.productId)).filter(Boolean)

  return (
    <div className="bg-green-50 min-h-screen">
      <h2 className="text-center font-bold text-xl py-4 text-primary-text md:text-2xl">
        Your Favorite Items
      </h2>
      {favoriteProducts.length > 0 ? (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4"
        >
          {favoriteProducts.map((product) => (
            <div
              className="flex justify-between items-center bg-secondary-text shadow-2xl rounded"
              key={product.id}
            >
              <img
                src={assets[product.image]}
                alt={product.name}
                className="size-24 rounded-2xl"
              />
              <p className="font-semibold text-primary-text truncate text-ellipsis w-32 md:pl-2">{product.name}</p>
              <span className="self-end pr-2 text-green-700 font-bold">{product.price}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-56">
          <p className="text-2xl md:text-5xl text-primary-text">
            No Favorite items Yet
          </p>
        </div>
      )}
    </div>
  )
}

export default Favorites
