import Image from 'next/image';
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='text-black px-8 py-6 flex md:flex-row flex-col md:justify-start justify-between md:gap-16 lg:gap-[18rem] items-center'>
        <div className="flex items-center gap-2">
        <Image
          src="/images/logo.png"
          alt="Logo Image"
          width={100}
          height={100}
          className="w-[100px] h-[100px]"
        />
      </div>

      <div className='md:w-[30rem] w-full'>
      <Navbar />
      </div>
    </div>
  );
};

export default Header;