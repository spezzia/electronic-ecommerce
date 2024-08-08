import ActionButton from './Utils/ActionButton';
import CardOffers from './Utils/CardOffer';
import Spacer from './Utils/Spacer';

export default function Offers() {
  return (
    <section className='w-full px-[100px] flex flex-nowrap gap-3'>
      <CardOffers
        propsContainer={{
          className: 'flex flex-col items-center justify-center',
        }}
      >
        <p className='text-center text-[background: #000000] font-prompt font-bold  text-[45px] w-[441px]'>
          Might Sound, Everywhere
        </p>
        <Spacer className='h-[10px]' />
        <div className='bg-[#D9D9D9] w-[422px] h-[267px] flex flex-col justify-end items-center p-[10px] rounded-lg'>
          <ActionButton color='bg-[#5E1EE5]' label='Discover Now' />
        </div>
      </CardOffers>
      <CardOffers
        propsContainer={{
          className: 'flex flex-col items-center justify-center',
        }}
      >
        <div className='w-full flex flex-row justify-center gap-10 '>
          <div>
            <p className='w-fit text-[background: #000000] font-prompt font-bold text-[45px]'>
              20% OFF
            </p>
            <p className='w-[213px] text-[23px] text-[#000000] font-regular'>
              Special Christmas Day Offer
            </p>
          </div>
          <ActionButton color='bg-[#5E1EE5]' label='Discover Now' />
        </div>
        <div className='w-full flex justify-end px-[50px]'>
          <div className='bg-[#D9D9D9] w-[306px] h-[267px] flex flex-col justify-end items-center p-[10px] rounded-lg'></div>
        </div>
      </CardOffers>
    </section>
  );
}
