import { FaHome } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { GoHistory } from "react-icons/go";
import { FaUser } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='bg-primary sticky bottom-0 w-full'>
        <div className='mx-4 flex justify-between items-center p-4 sm:w-4/6 sm:mx-auto'>
        <div className='flex flex-col justify-center items-center gap-1 h-12'>
            <FaHome className='size-6 text-white' />
            <p className='text-white text-sm'>Home</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-1 h-12'>
            <MdFavoriteBorder className='size-6 text-white' />
            <p className='text-white text-sm hidden'>Favorite</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-1 h-12'>
            <GoHistory className='size-6 text-white' />
            <p className='text-white text-sm hidden'>History</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-1 h-12'>
            <FaUser className='size-6 text-white' />
            <p className='text-white text-sm hidden'>Profile</p>
        </div>
    </div>
    </div>
  )
}

export default Footer
