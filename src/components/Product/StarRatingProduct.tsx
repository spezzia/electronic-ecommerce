import { FaStar } from 'react-icons/fa6';

export default function StartRatingProduct({
  numberEvaluations = 0,
}: {
  numberEvaluations: number;
}) {
  return (
    <div className='w-full flex flex-row gap-2 items-center'>
      <div className='flex gap-2'>
        {[1, 2, 3, 4, 5].map((id) => {
          return <FaStar key={id} className='text-[24px] text-[#04A904]' />;
        })}
      </div>
      <p className='font-montserrat font-normal text-[18px]'>{`(${numberEvaluations})`}</p>
    </div>
  );
}
