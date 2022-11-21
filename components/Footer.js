import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className='max-w-7xl mx-auto w-4/5 my-5'>
      <footer className='flex items-center justify-center flex-col'>
        <Link href={"/"} className='mb-2'>
          <span className='font-bold whitespace-nowrap tracking-wide'>
            Contact Phone Directory
          </span>
        </Link>

        <p className='text-xs text-center'>
          Built by{" "}
          <a
            href='https://twitter.com/fatima_ola1'
            target='_blank'
            rel='noopener noreferrer'
            className='underline text-blue-500'
          >
            @fatima_ola1
          </a>
        </p>

        <address className='text-xs mt-3'>
          <p>Copyright &copy; {year}</p>
        </address>
      </footer>
    </div>
  );
};
export default Footer;
