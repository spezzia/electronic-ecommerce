export default function ItemCategory({
  categoryName,
  numberItems,
  bgColorItems = 'bg-[#1F2537]',
  textColorItems = 'text-[white]',
  isSelected = false,
  onClick,
}: {
  categoryName: string;
  numberItems: number;
  bgColorItems?: string;
  textColorItems?: string;
  isSelected?: boolean;
  onClick?: () => void;
}) {
  let lineColor = isSelected ? 'border-l-[#5E1EE5]' : 'border-l-[#E2E2E2]';

  return (
    <div
      className={`w-fit flex gap-5 items-center py-5 pl-5 border-l-[2px] ${lineColor}`}
    >
      <button
        type='button'
        onClick={onClick}
        className='font-montserrat font-normal text-[16px] text-[#2C2C2C] hover:font-semibold cursor-pointer'
      >
        {categoryName}
      </button>
      <span
        className={`${bgColorItems} px-3 py-1 font-montserrat text-[15px] ${textColorItems} rounded-lg font-bold`}
      >
        {numberItems}
      </span>
    </div>
  );
}
