import { getXataClient } from "../../src/xata";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Image from "next/image";
import { useRouter } from "next/router";
import { MdWifiCalling3 } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import { BiVideo } from "react-icons/bi";

const Contact = ({ data }) => {
  const router = useRouter();

  const deleteContact = (id) => {
    fetch("/api/delete-contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    }).then(() => {
      router.push("/");
    });
  };

  function getFirstLetter(character) {
    return character.charAt(0).toUpperCase();
  }


  return (
    <div className='min-h-screen flex flex-col'>
      <div className='border-b border-gray-100 mb-6'>
        <Header />
      </div>
      <section className='mx-auto w-[30%] p-8 shadow-sm border-2 hover:shadow-lg rounded-lg'>
        <div className='flex justify-center'>
          {data.imageUrl === "" ? (
            <p className='self-center bg-pink-200 font-bold py-2 px-4 mr-2 rounded-full'>
              {getFirstLetter(data.firstName)}
            </p>
          ) : (
            <Image
            width={80}
            height={20}
            className='h-20 w-30 rounded-full'
            src={data.imageUrl}
            alt=''
          />
          )}
        </div>
        <div className='text-center font-semibold'>
          <p>{`${data.firstName} ${data.lastName}`}</p>
        </div>
        <div className='flex justify-center'>
          <ul className='list-none flex m-4'>
            <li className='p-3 text-blue-600 text-[22px]'>
              <MdWifiCalling3 className='cursor-pointer' />
            </li>
            <li className='p-3  text-red-400 text-[22px]'>
              <BiMessageDetail className='cursor-pointer' />
            </li>
            <li className='p-3 text-purple-400 text-[22px]'>
              <BiVideo className='cursor-pointer' />
            </li>
          </ul>
        </div>
        <div className=''>
          <div className='my-3'>
            <p className='font-semibold'>Mobile:</p>
            <p>{data.phoneNumber}</p>
          </div>
          <div className='my-3'>
            <p className='font-semibold'>Location:</p>
            <p>{data.location}</p>
          </div>
          <div className='my-3'>
            <p className='font-semibold'>Email:</p>
            <p>{data.email}</p>
          </div>
        </div>
        <div className='flex justify-center my-6'>
          <button
            type='submit'
            className=' bg-red-300 text-gray-50 hover:bg-red-600 py-2 px-6 rounded-full'
            onClick={() => deleteContact(data.id)}
          >
            Delete
          </button>
        </div>
      </section>
      <div className='border-t border-gray-100 mt-6'>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const xata = await getXataClient();

  const contact = await xata.db.contacts.read(id);

  return {
    props: {
      data: contact,
    },
  };
}
