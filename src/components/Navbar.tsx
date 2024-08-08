import Link from 'next/link';
import ActionButton from './Utils/ActionButton';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Navbar() {
  const classNameLabelNavbar =
    'text-[#8E8E8E] font-montserrat text-[13px] font-semibold hover:underline';

  const routers = [
    {
      label: 'Home',
      url: '',
    },
    {
      label: 'Pricing',
      url: '',
    },
    {
      label: 'Events',
      url: '',
    },
    {
      label: 'Company',
      url: '',
    },
  ];

  return (
    <nav className='w-full flex flex-row flex-nowrap py-[39px] bg-white items-center justify-between px-[100px]'>
      <div className='w-[121px] h-[20px] relative'>
        <Image
          src={'/images/Sphere.png'}
          alt={'Sphere'}
          width={121}
          height={20}
        />
        <Image
          src={'/images/DotSphere.png'}
          alt={'DotSphere'}
          width={18}
          height={18}
          className='absolute -right-[11px] -top-[11px] '
        />
      </div>
      <div className='flex flex-row gap-5 items-center'>
        {routers.map((route) => {
          return (
            <Link href={route.url} key={route.label}>
              <p className={classNameLabelNavbar}>
                {`${route.label}`.toUpperCase()}
              </p>
            </Link>
          );
        })}
      </div>
      <div className='flex flex-row gap-8 items-center'>
        <p className={classNameLabelNavbar}>LOGIN</p>
        <motion.div
          whileInView={{ rotate: [0, 2, -2, 0] }}
          transition={{
            duration: 1,
            repeat: 2,
            ease: 'linear',
            delay: 0,
          }}
          className='w-fit'
        >
          <ActionButton
            color='#000000'
            label='Sign Up Now'
            labelClassName='text-white'
            buttonClassName='bg-black'
          />
        </motion.div>
      </div>
    </nav>
  );
}
