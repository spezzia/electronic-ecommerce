import Image from 'next/image';

export default function MainFeatures() {
  return (
    <div className='w-full flex justify-center -mt-[200px]'>
      <Image
        src={'/images/StartPage/MainFeatures.png'}
        alt={'MainFeatures'}
        width={215}
        height={175}
      />
    </div>
  );
}
