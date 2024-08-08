import Image from 'next/image';
import TitleStartPage from './StartPage/TitleStartPage';
import ProductStartPage from './StartPage/ProductStartPage';
import Spacer from './Utils/Spacer';
import MainFeatures from './StartPage/MainFeatures';

export default function StartPage() {
  return (
    <section className='bg-[#F3F4F6] w-full relative'>
      <div className='w-full h-full absolute  bg-transparent pt-10 pl-[150px]'>
        <div className='relative w-full'>
          <TitleStartPage />
          <Spacer className='h-[30px]' />
          <ProductStartPage />
          <MainFeatures />
        </div>
      </div>
      <Image
        className='ml-auto'
        src={'/images/StartPage/Iphone.png'}
        alt={'Iphone image'}
        width={740}
        height={648}
      />
    </section>
  );
}
