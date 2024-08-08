import { IoGameController, IoLaptop, IoLaptopOutline } from 'react-icons/io5';
import ItemProvide from './Provide/ItemProvide';
import Spacer from './Utils/Spacer';
import { BsFillPhoneFill } from 'react-icons/bs';
import { FaCamera } from 'react-icons/fa6';
import { BiSolidSpeaker } from 'react-icons/bi';
import { IoIosTv } from 'react-icons/io';
import Image from 'next/image';

export default function WeProvider() {
  const providers = [
    {
      icon: <IoLaptop className='text-[40px] text-black' />,
      label: 'Computer & Laptop',
    },
    {
      icon: <BsFillPhoneFill className='text-[40px] text-black' />,
      label: 'Mobile & Phone',
    },
    {
      icon: <FaCamera className='text-[40px] text-black' />,
      label: 'Camera',
    },
    {
      icon: <IoIosTv className='text-[40px] text-black' />,
      label: 'TV & Smart Box',
    },
    {
      icon: (
        <Image
          src='/images/HomeAppliance.svg'
          alt={'HomeAppliance'}
          width={40}
          height={40}
        />
      ),
      label: 'Home Appliance',
    },
    {
      icon: <BiSolidSpeaker className='text-[40px] text-black' />,
      label: 'Accessories',
    },
    {
      icon: <IoGameController className='text-[40px] text-black' />,
      label: 'Other Categories',
    },
  ];

  return (
    <section className='w-full px-[100px] flex flex-col'>
      <div className='w-full flex justify-center'>
        <p className='text-[74px] font-prompt font-black text-[#000000]'>
          What <span className='text-[#5E1EE5]'>we</span> provide?
        </p>
      </div>
      <Spacer className='h-[30px]' />
      <div className='w-full flex flex-row justify-between'>
        {providers.map((provider) => {
          return (
            <ItemProvide
              key={provider.label}
              icon={provider.icon}
              label={provider.label}
            />
          );
        })}
      </div>
    </section>
  );
}
