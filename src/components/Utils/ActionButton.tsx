import { FaArrowRight } from 'react-icons/fa6';

export default function ActionButton({
  label,
  color = 'bg-[#000000]',
  buttonClassName,
  labelClassName,
}: {
  label: string;
  color: string;
  buttonClassName?: string;
  labelClassName?: string;
}) {
  const classNameButton = `w-[208px] h-[52px] ${color} rounded-full hover:shadow-lg hover:opacity-90 flex justify-center items-center ${buttonClassName}`;

  return (
    <button className={classNameButton}>
      <p
        className={`text-white font-montserrat text-[16px] font-normal flex flex-row items-center gap-3 ${labelClassName}`}
      >
        {label} <FaArrowRight />
      </p>
    </button>
  );
}
