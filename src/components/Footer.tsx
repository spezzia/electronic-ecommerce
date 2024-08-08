import Link from 'next/link';
import Image from 'next/image';
import Spacer from './Utils/Spacer';

export default function Footer() {
  const classNameTitles =
    'font-montserrat font-black text-[22px] text-[#000000]';

  const classNameRoute =
    'font-montserrat font-regular text-[18px] text-[#000000] hover:font-bold';

  const companyRoutes = [
    {
      url: '',
      label: 'About Us',
    },
    {
      url: '',
      label: 'Products Digital',
    },
    {
      url: '',
      label: 'Customer Reviews',
    },
  ];

  const informationRoutes = [
    {
      url: '',
      label: 'Help Center',
    },
    {
      url: '',
      label: 'Payment Methods',
    },
    {
      url: '',
      label: 'Return & Refund',
    },
  ];

  const contactRoutes = [
    {
      url: '',
      label: '(+1) 123-456-7890',
      icon: <></>,
    },
    {
      url: '',
      label: 'email@youremail.com',
      icon: <></>,
    },
  ];

  return (
    <footer className='w-full px-[100px] flex flex-row flex-nowrap justify-between items-end'>
      <div className='w-4/12'>
        <div className='w-[190px] h-[30px] relative'>
          <Image
            src={'/images/Sphere.png'}
            alt={'Sphere'}
            width={190}
            height={30}
          />
          <Image
            src={'/images/DotSphere.png'}
            alt={'DotSphere'}
            width={27}
            height={27}
            className='absolute -right-[16px] -top-[16px] '
          />
        </div>
        <Spacer className='h-[30px]' />
        <p className='font-montserrat font-light text-[18px] text-[#000000]'>
          Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus
          vitae leo nunc.
        </p>
      </div>
      <div className='w-6/12 flex flex-row'>
        <div className='w-1/3 flex flex-col gap-5'>
          <p className={classNameTitles}>Company</p>
          {companyRoutes.map((route) => {
            return (
              <Link href={route.url} key={route.url}>
                <p className={classNameRoute}>{route.label}</p>
              </Link>
            );
          })}
        </div>
        <div className='w-1/3 flex flex-col gap-5'>
          <p className={classNameTitles}>Information</p>
          {informationRoutes.map((route) => {
            return (
              <Link href={route.url} key={route.url}>
                <p className={classNameRoute}>{route.label}</p>
              </Link>
            );
          })}
        </div>
        <div className='w-1/3 flex flex-col gap-5'>
          <p className={classNameTitles}>Contact</p>
          {contactRoutes.map((route) => {
            return (
              <Link href={route.url} key={route.url}>
                <p className={classNameRoute}>{route.label}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
