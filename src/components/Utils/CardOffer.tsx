import { HTMLAttributes } from 'react';

export default function CardOffers({
  children,
  propsContainer,
}: {
  children: React.ReactNode;
  propsContainer?: HTMLAttributes<HTMLDivElement>;
}) {
  return (
    <div
      className={`flex-1 bg-[#F3F4F6] rounded-2xl h-[490px] ${propsContainer?.className}`}
    >
      {children}
    </div>
  );
}
