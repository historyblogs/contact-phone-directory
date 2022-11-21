import Head from "next/head";
import LandingPage from "../components/LandingPage";
import { getXataClient } from "../src/xata";
import ContactList from "../components/ContactList/ContactList";

export default function Home({ phoneBooks }) {
  return (
    <div>
      <Head>
        <title>Contacts Phone Directory</title>
        <meta name='description' content='Job board app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <LandingPage>
        <div className='flex justify-center mb-4'>
          <input
            className='placeholder:italic placeholder:text-slate-400 block bg-white w-[50%] border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
            placeholder='Search for contact...'
            type='text'
            name='search'
            // onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <ContactList allContacts={phoneBooks} />
      </LandingPage>
    </div>
  );
}

export async function getServerSideProps() {
  const xata = getXataClient();
  const phoneBooks = await xata.db.contacts.getAll();
  console.log(phoneBooks);

  return { props: { phoneBooks } };
}
