import { motion } from 'framer-motion';

export default function TitleStartPage() {
  return (
    <div className='w-auto'>
      <h1 className='font-prompt font-[800] text-[74px] text-[#000000]'>
        <span className='relative z-20 -mr-4'>Grab</span>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'linear' }}
          className='bg-[#5E1EE5] px-8 rounded-[28px] text-white -ml-0  transition-all transform inline-block -rotate-3 z-10'
        >
          50%
        </motion.span>
        <br />
        Off Smartphone
        <br /> Collection
      </h1>
      <p className='font-montserrat text-[18px] text-[#000000] max-w-[426px] mt-5'>
        Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus vitae
        leo nunc.
      </p>
    </div>
  );
}
