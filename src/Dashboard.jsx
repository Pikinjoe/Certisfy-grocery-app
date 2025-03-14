import { useMemo } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import './Dashboard.css';

import { useAuth } from './AuthContext'

import { IoSearchOutline } from "react-icons/io5";
import { assets } from './Data/assets';
import  products from './Data/products';
import discounts from './Data/discounts';

const Dashboard = () => {
  const { user } = useAuth()
  const navigate = useNavigate()

  if (!user) return navigate('/login')

    //function to get random products for featured products section

    const getRandomProduct = (arr, num) => {
      const shuffled = [...arr].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, num);
    }
    const randomProducts = getRandomProduct(products, 12);

    //sort the random products by lowest price
    const sortedRandomProducts = [...randomProducts].sort((a, b) => a.price - b.price);

    //function to get random products from each category for category section
    const getRandomFromEachCategory = (products) => {
      const groupByCategory = products.reduce((acc, product) => {
        if (!acc[product.category]) {
          acc[product.category] = [];
        }
        acc[product.category].push(product);
        return acc;
      }, {});

      //get one random product from each category
      return Object.keys(groupByCategory).map(category => {
        const categoryProducts = groupByCategory[category];
        const randomIndex = Math.floor(Math.random() * categoryProducts.length);
        return categoryProducts[randomIndex];
      });
    }

    //Memoize the function to avoid re-randomizing the products on every render
    const randomCategoryProducts = useMemo(() => getRandomFromEachCategory(products),[])

  return (
    
      <div className='bg-green-50 min-h-screen'>
        
        <div className='' >
          <div className='flex justify-center items-center py-4'>
            <div className='flex items-center justify-between bg-secondary p-2 rounded-xl gap-2 sm:w-3/6'>
              <input type="text" placeholder='Search for groceries' className='outline-0' />
              <IoSearchOutline className='cursor-pointer' />
            </div>
          </div>

          <div className='pb-4'>
            <Swiper
              modules={[EffectCoverflow]}
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={'auto'}
              spaceBetween={100} //check other nums
              coverflowEffect={{
                rotate: 0,  //try 50
                stretch: 50,
                depth: 200,
                modifier: 1, // try 1
              }}
              className='h-28 sm:h-36 sm:w-[600px]  '
            >
                {discounts.map(discount => (
                  <SwiperSlide key={discount.id} >
                    <img src={assets[discount.image]} alt={discount.image} className='object-cover object-center w-[95%] transition-all duration-300 ' /> 
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>

          <div className='mx-4 sm:mx-8 sm:my-8'>
            <p className='font-semibold capitalize px-4 pb-1'>featured products</p>
            <div className='grid grid-cols-3 sm:grid-cols-4 gap-4 sm:gap-8 p-4'>
              {randomProducts.map(product => (
              <div className='sm:h-72 shadow-md' key={product.id}>
                <img src={assets[product.image]} alt={product.name}className='w-28 h-14 sm:h-full object-cover rounded sm:h-40 sm:w-full cursor-pointer' />
                <p className='overflow-hidden text-ellipsis w-24 sm:w-full'>{product.name}</p>
              </div>
              ))}
            </div>
          </div>

          <div className='my-2 sm:mb-8 mt-4 mx-4 sm:mx-8'>
            <div className='flex justify-between items-center'>
              <p className='font-semibold capitalize pb-1 px-4'>categories</p>
              <NavLink to='/categories'><span>See all</span></NavLink> 
            </div>
            <div className='grid grid-cols-3 sm:grid-cols-4 gap-4 sm:gap-8 p-4'>
              {randomCategoryProducts.map(product => (
              <div className='shadow-md' key={product.id}>
                <img src={assets[product.image]} alt={product.name}className='w-26 h-14 object-cover rounded cursor-pointer sm:h-72 sm:w-full' />
                <p className='overflow-hidden text-ellipsis w-24'>{product.category}</p>
              </div>
              ))}
            </div>
          </div>

          <div className='mt-1'>
            <p className='capitalize text-sm bg-primary px-4 sm:px-8 py-1 text-white'>special deals</p>
            <div className='grid grid-cols-3 sm:grid-cols-4 gap-4 sm:gap-8 p-4'>
              {sortedRandomProducts.map(product => (
                <div className='sm:my-4 shadow-md' key={product.id}>
                  <img src={assets[product.image]} alt={product.name} className='w-28 h-14 object-cover rounded sm:h-72 sm:w-full cursor-pointer' />

                  <div className='flex sm:justify-between sm:items-center sm:flex-row flex-col'>
                    <p className='capitalize overflow-hidden text-ellipsis w-24 sm:w-full'>{product.name}</p>
                    <p className='font-bold text-primary'>{product.price}</p>
                  </div>
                </div>
              ))}
             
            </div>
          </div>
        </div>
        
      </div>

  )
}

export default Dashboard
