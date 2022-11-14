import Link from 'next/link';

const Header = () => {
  return (
    <div className='max-w-7xl mx-auto w-4/5 my-5'>
      <div className='flex items-center justify-between'>
        <Link href={'/'}>
          <span className='font-bold whitespace-nowrap tracking-wide'>
            All Contacts
          </span>
        </Link>
        <Link href='/add-contact'>
          <ul>
            <li className='bg-blue-600 text-gray-50 py-0.5 px-1 tracking-wide whitespace-nowrap'>
              Add Contact
            </li>
          </ul>
        </Link>
      </div>
    </div>
  );
};

export default Header;
