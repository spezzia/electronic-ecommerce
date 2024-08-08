import ListCategories from './Product/ListCategories';
import NavigationButtonsProducts from './Product/NavigationButtonsProducts';
import Product from './Product/Product';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from 'react';

export default function ListProducts() {
  let sliderRef = useRef<any>(null);

  const products = [
    {
      name: 'Xiphone 14 Pro Maxe',
      price: '$175.00',
    },
    {
      name: 'Xiphone 13 Pro Maxe',
      price: '$159.99',
    },
    {
      name: 'Xiphone 12 Pro Maxe',
      price: '$139.00',
    },
    {
      name: 'Xiphone 11 Pro Maxe',
      price: '$125.00',
    },
    {
      name: 'Xiphone X Pro Maxe',
      price: '$99.99',
    },
  ];

  const next = () => {
    sliderRef.current?.slickNext();
  };

  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  return (
    <section className='w-full px-[100px] flex flex-row gap-8 flex-wrap'>
      <div className='w-full flex flex-row justify-between'>
        <p className='font-prompt font-bold text-[47px] text-[#000000]'>
          New <span className='text-[#5E1EE5]'>arrival</span> for you
        </p>
        <NavigationButtonsProducts onNext={next} onPrev={previous} />
      </div>
      <div className=''>
        <ListCategories />
      </div>
      <div className='flex-1 flex flex-row gap-5 overflow-hidden overflow-x-hidden px-5 py-2'>
        <Slider
          ref={sliderRef}
          {...settings}
          className='w-full flex flex-row gap-5'
        >
          {products.map((prod) => {
            return (
              <div className='mx-5 my-5' key={prod.name}>
                <Product price={prod.price} name={prod.name} />
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}
