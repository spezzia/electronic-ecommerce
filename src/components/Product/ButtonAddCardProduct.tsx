import { MdShoppingCart } from 'react-icons/md';

export default function ButtonAddCardProduct() {
  return (
    <div className='w-full'>
      <button
        className={`w-[192px] h-[53px] bg-white rounded-full border-[1px] border-[#000000] hover:shadow-lg hover:opacity-90`}
      >
        <p
          className={`text-black font-montserrat text-[16px] font-normal flex justify-center items-center gap-2`}
        >
          <MdShoppingCart className='text-[20px] text-black' /> Add to Cart
        </p>
      </button>
    </div>
  );
}
