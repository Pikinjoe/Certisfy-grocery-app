import { useState, useEffect, useRef } from 'react'
import { useNavigate }from 'react-router-dom'
import { useAuth } from '../AuthContext'
import { assets } from '../Data/assets';
import  products from '../Data/products';
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";

const Categories = () => {
  const navRef = useRef(null);
  const navigate = useNavigate()
  const { user } = useAuth()

 const [selectedCategory, setSelectedCategory] = useState('all')
 const [favorites, setFavorites] = useState({})

 const filteredProducts = selectedCategory === 'all' ? products :
 products.filter(product => product.category.toLowerCase() === selectedCategory.toLowerCase())

 const categoryClick = (category) => {
  setSelectedCategory(category)
 }

 const toggleFavorite = async (productId) => {
  if (!user) {
    return
  }

  const isFavorited = favorites[productId]

  setFavorites((prev) => ({
    ...prev,
    [productId]: !prev[productId]
  }))

  try {
    let response;
    if (isFavorited) {
      // Find the favorite to delete
      const findResponse = await fetch(
        `http://localhost:8000/favorites?userId=${user.id}&productId=${productId}`
      );
      const favoritesToDelete = await findResponse.json();
      if (favoritesToDelete.length === 0) {
        throw new Error('Favorite not found');
      }
      const favoriteId = favoritesToDelete[0].id;

      // DELETE request
      response = await fetch(`http://localhost:8000/favorites/${favoriteId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } else {
      // POST request
      response = await fetch('http://localhost:8000/favorites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: user.id, productId }),
      });
    }

    if (!response.ok) {
      throw new Error(`Failed to ${isFavorited ? 'remove' : 'add'} favorite`);
    }

    const data = await response.json();
 } catch (error) {
  console.error('Error updating favorites', error)
  setFavorites((prev) => ({
    ...prev,
    [productId]: isFavorited,
  }))
 }
}

 const addToCart = () => {

 }

 useEffect(() => {
  const nav = navRef.current;
  let isDown = false;
  let startX;
  let scrollLeft;

  const handleStart = (e) => {
    isDown = true;
    startX = (e.pageX || e.touches[0].pageX) - nav.offsetLeft;
    scrollLeft = nav.scrollLeft;
  };

  const handleEnd = () => {
    isDown = false;
  };

  const handleMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = (e.pageX || e.touches[0].pageX) - nav.offsetLeft;
    const walk = (x - startX) * 1.5; // Adjust scroll speed
    nav.scrollLeft = scrollLeft - walk;
  };

 


  nav.addEventListener('mousedown', handleStart);
  nav.addEventListener('mouseleave', handleEnd);
  nav.addEventListener('mouseup', handleEnd);
  nav.addEventListener('mousemove', handleMove);

  nav.addEventListener('touchstart', handleStart);
  nav.addEventListener('touchend', handleEnd);
  nav.addEventListener('touchmove', handleMove);

  return () => {
    nav.removeEventListener('mousedown', handleStart);
    nav.removeEventListener('mouseleave', handleEnd);
    nav.removeEventListener('mouseup', handleEnd);
    nav.removeEventListener('mousemove', handleMove);
    nav.removeEventListener('touchstart', handleStart);
    nav.removeEventListener('touchend', handleEnd);
    nav.removeEventListener('touchmove', handleMove);
  };
}, []);

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
      console.log('Initial favorite:', data);
      const favoriteMap = (data || []).reduce((acc, favorite) => {
        acc[favorite.productId] = true
        return acc
      }, {})
      setFavorites(favoriteMap)
    })
    .catch((error) => console.error('Error fetching favorites:', error))
  }
}, [user])

  return (
    <div className="bg-green-50 min-h-screen">
       <h2 className="text-center font-bold text-xl py-2 text-primary-text md:text-2xl capitalize">
        {selectedCategory === 'all' ? 'products' : selectedCategory}
      </h2>

      <div ref={navRef}
       className="overflow-x-auto whitespace-nowrap pb-2 scrollbar-hide">
        <button onClick={() => categoryClick('all')} className={`px-4 py-2 rounded bg-green-200 mx-2 font-semibold ${ selectedCategory === 'all' ? 'bg-primary text-white' : ''}`}>All</button>
          <button onClick={() => categoryClick('beverages')} className={`px-4 py-2 rounded bg-green-200 mx-2 font-semibold ${ selectedCategory === 'beverages' ? 'bg-primary text-white' : ''}`}>Beverages</button>
          <button  onClick={() => categoryClick('confectioneries')} className={`px-4 py-2 rounded bg-green-200 mx-2 font-semibold ${ selectedCategory === 'confectioneries' ? 'bg-primary text-white' : ''}`}>Confectioneries</button>
          <button  onClick={() => categoryClick('jams')} className={`px-4 py-2 rounded bg-green-200 mx-2 font-semibold ${ selectedCategory === 'jams' ? 'bg-primary text-white' : ''}`}>Jams</button>
          <button  onClick={() => categoryClick('fruits')} className={`px-4 py-2 rounded bg-green-200 mx-2 font-semibold ${ selectedCategory === 'fruits' ? 'bg-primary text-white' : ''}`}>Fruits</button>
          <button  onClick={() => categoryClick('nuts')} className={`px-4 py-2 rounded bg-green-200 mx-2 font-semibold ${ selectedCategory === 'nuts' ? 'bg-primary text-white' : ''}`}>Nuts</button>
          <button  onClick={() => categoryClick('vegetables')} className={`px-4 py-2 rounded bg-green-200 mx-2 font-semibold ${ selectedCategory === 'vegetables' ? 'bg-primary text-white' : ''}`}>Vegetables</button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product.id} className="shadow-md rounded bg-white h-48">
              <div className="h-3/4 relative">
                <img src={assets[product.image]} alt={product.name} className="h-full
                 w-full object-cover" />
                 <div onClick={(e) => {
                  e.stopPropagation()
                  toggleFavorite(product.id)
                 }}>
                  {favorites[product.id] ? (
                    <MdFavorite className="text-2xl absolute right-2 top-2 text-red-500 cursor-pointer" />
                  ) : (
                    <MdOutlineFavoriteBorder className="text-2xl absolute right-2 top-2 text-white cursor-pointer" />
                  )}
                 </div>
              </div>
              <div className="flex justify-between items-center mx-1">
                <div>
                  <p className="overflow-hidden text-ellipsis w-24">{product.name}</p>
                  <p className="text-red-600">{`${product.price} /`} <span>{product.size}</span></p>
                </div>
                <span className="bg-primary px-2 font-bold text-lg rounded-md cursor-pointer" onClick={addToCart}>+</span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full">No items found</p>
        )}
      </div>
    </div>
  )
}

export default Categories
