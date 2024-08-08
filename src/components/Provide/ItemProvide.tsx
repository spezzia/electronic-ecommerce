import { motion } from 'framer-motion';

export default function ItemProvide({
  icon,
  label,
  containerClassName,
  iconContainerClassName,
  labelClassName,
}: {
  icon: React.ReactNode;
  label: string;
  containerClassName?: string;
  iconContainerClassName?: string;
  labelClassName?: string;
}) {
  return (
    <motion.div
      initial={false}
      whileHover={{ scale: 1.1 }}
      className={`flex flex-col items-center gap-5 cursor-pointer ${containerClassName}`}
    >
      <div
        className={`w-[85px] h-[85px] rounded-full shadow-providers flex justify-center items-center ${iconContainerClassName}`}
      >
        {icon}
      </div>
      <p
        className={`'font-montserrat font-normal text-[18px] text-center text-[#2C2C2C] max-w-[118px] ${labelClassName}`}
      >
        {label}
      </p>
    </motion.div>
  );
}
