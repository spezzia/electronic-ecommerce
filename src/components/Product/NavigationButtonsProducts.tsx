import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

export default function NavigationButtonsProducts({
  onNext,
  onPrev,
}: {
  onNext: () => void;
  onPrev: () => void;
}) {
  const baseButtonClassName =
    'w-[55px] h-[55px] rounded-full flex justify-center items-center text-black border-[1px] border-black hover:border-[#AFE638] hover:bg-[#AFE638]';

  return (
    <div className='fit-w flex flex-row items-center gap-5'>
      <motion.button
        initial={false}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.2 }}
        className={`${baseButtonClassName}`}
        onClick={onPrev}
      >
        <FaArrowLeft className='text-[20px] text-black' />
      </motion.button>
      <motion.button
        initial={false}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.2 }}
        className={`${baseButtonClassName}`}
        onClick={onNext}
      >
        <FaArrowRight className='text-[20px] text-black' />
      </motion.button>
    </div>
  );
}
