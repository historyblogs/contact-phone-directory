import Footer from "./Footer";
import Header from "./Header";

const LandingPage = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col'>
      <div className='border-b border-gray-100'>
        <Header />
      </div>
      <main className='flex-grow   md:max-w-7xl md:mx-auto md:w-4/5 my-5 '>
        {children}
      </main>
      <div className='border-t border-gray-100'>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
