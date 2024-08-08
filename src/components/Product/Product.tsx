import Spacer from '../Utils/Spacer';
import ButtonAddCardProduct from './ButtonAddCardProduct';
import DescriptionProduct from './DescriptionProduct';
import ImageProduct from './ImageProduct';
import StartRatingProduct from './StarRatingProduct';

export default function Product({
  name,
  price,
}: {
  name: string;
  price: string;
}) {
  return (
    <div>
      <ImageProduct />
      <Spacer className='h-[20px]' />
      <DescriptionProduct name={name} price={price} />
      <Spacer className='h-[10px]' />
      <StartRatingProduct numberEvaluations={120} />
      <Spacer className='h-[20px]' />
      <ButtonAddCardProduct />
    </div>
  );
}
