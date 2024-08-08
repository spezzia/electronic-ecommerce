import Spacer from '../Utils/Spacer';

export default function DescriptionProduct({
  name,
  price,
}: {
  name: string;
  price: string;
}) {
  return (
    <div className='w-full flex flex-col max-w-[410px]'>
      <div className='w-full flex flex-row gap-2'>
        <p className='flex-1 font-montserrat font-black text-[18px] text-black'>
          {name}
        </p>
        <p className='w-fit font-montserrat font-bold text-[18px] text-black'>
          {price}
        </p>
      </div>
      <Spacer className='h-[20px]' />
      <p className='font-montserrat font-normal text-[18px] text-black'>
        Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus vitae
        leo nunc.
      </p>
    </div>
  );
}
