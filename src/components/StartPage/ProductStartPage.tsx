import Image from 'next/image';

export default function ProductStartPage() {
  return (
    <div className='w-fit flex flex-row gap-5'>
      <div>
        <Image
          src={'/images/StartPage/MainProduct.png'}
          alt={'MainProduct'}
          width={112}
          height={112}
        />
      </div>
      <div className='w-fit'>
        <p className='font-prompt font-semibold text-[33px]'>
          Xiphone 14 <br /> Edition
        </p>
      </div>
    </div>
  );
}
