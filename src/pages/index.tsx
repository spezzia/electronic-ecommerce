import Footer from '@/components/Footer';
import ListProducts from '@/components/ListProducts';
import Navbar from '@/components/Navbar';
import Offers from '@/components/Offers';
import StartPage from '@/components/StartPage';
import Spacer from '@/components/Utils/Spacer';
import WeProvider from '@/components/WeProvide';

export default function Home() {
  return (
    <main className={'w-full h-screen'}>
      <Navbar />
      <StartPage />
      <Spacer className='h-[93px]' />
      <WeProvider />
      <Spacer className='h-[93px]' />
      <ListProducts />
      <Spacer className='h-[93px]' />
      <Offers />
      <Spacer className='h-[93px]' />
      <Footer />
      <Spacer className='h-[40px]' />
    </main>
  );
}
