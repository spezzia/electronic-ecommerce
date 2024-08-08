import { useState } from 'react';
import ItemCategory from './ItemCategory';

export default function ListCategories() {
  const [selectCategory, setSelectedCategory] = useState('Mobile & Phone');

  const categories = [
    {
      name: 'Computer & Laptop',
      bgColorItems: 'bg-[#1F2537]',
      numberItems: 15,
    },
    {
      name: 'Mobile & Phone',
      bgColorItems: 'bg-[#AFE638]',
      textColorItems: 'text-black',
      numberItems: 35,
    },
    {
      name: 'Camera Imaging',
      bgColorItems: 'bg-[#5E1EE5]',
      textColorItems: 'text-white',
      numberItems: 10,
    },
    {
      name: 'TV & Smart Box',
      bgColorItems: 'bg-[#F1F1F2]',
      textColorItems: 'text-black',
      numberItems: 8,
    },
    {
      name: 'Home Appliance',
      bgColorItems: 'bg-[#FFE921]',
      textColorItems: 'text-black',
      numberItems: 2,
    },
  ];

  return (
    <div className='w-full'>
      {categories.map((cat) => {
        return (
          <ItemCategory
            key={cat.name}
            categoryName={cat.name}
            bgColorItems={cat.bgColorItems}
            textColorItems={cat.textColorItems}
            onClick={() => {
              setSelectedCategory(cat.name);
            }}
            isSelected={selectCategory.startsWith(cat.name)}
            numberItems={cat.numberItems}
          />
        );
      })}
    </div>
  );
}
