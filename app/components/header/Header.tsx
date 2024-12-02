import Image from 'next/image';
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='text-black px-8 py-6 flex justify-start gap-[18rem] items-center'>
        <div className='flex gap-2'>
            <Image
             src="/images/logo.png"
             alt='Logo Image'
             width={100}
             height={100}
             className=''/>
        </div>
         <Navbar />
    </div>
  );
};

export default Header;