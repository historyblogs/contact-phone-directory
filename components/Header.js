import Link from 'next/link';
import { AiFillPlusCircle } from 'react-icons/ai';

const Header = () => {
  return (
    <div className='max-w-7xl mx-auto w-4/5 my-5'>
      <div className='flex items-center justify-between'>
        <Link href={'/'}>
          <span className='font-bold whitespace-nowrap tracking-wide'>
            All Contacts
          </span>
        </Link>
        <Link href='/add-new-contact'>
          <ul>
            <li className='text-blue-600 text-[40px]'>
            <AiFillPlusCircle />
            </li>
          </ul>
        </Link>
      </div>
    </div>
  );
};

export default Header;
