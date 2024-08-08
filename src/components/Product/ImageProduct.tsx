import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa6';
import { motion } from 'framer-motion';

export default function ImageProduct() {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  return (
    <div className='w-[410px] h-[404px] bg-[#FFFFFF] rounded-productImage flex flex-col justify-center items-center shadow-productImage p-[20px] gap-5'>
      <div className='w-full flex flex-row justify-end'>
        <motion.button
          initial={false}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.2 }}
          className='bg-[#000000] rounded-full w-[49px] h-[49px] text-white hover:opacity-90 flex items-center justify-center'
          onClick={() => {
            setIsLiked(!isLiked);
          }}
        >
          {isLiked ? (
            <FaHeart className='text-[20px]' />
          ) : (
            <FaRegHeart className='text-[20px]' />
          )}
        </motion.button>
      </div>
      <div className='w-[302px] h-[267px] bg-[#D9D9D9]'></div>
    </div>
  );
}
