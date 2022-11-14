import Head from 'next/head';
import LandingPage from '../components/LandingPage';
// import { getXataClient } from '../src/xata';
// import ContactList from '../components/ContactList';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Job board</title>
        <meta name='description' content='Job board app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <LandingPage>
        {/* <ContactList contacts={contacts} /> */}
      </LandingPage>
    </div>
  );
}

// export async function getServerSideProps() {
//   const xata = await getXataClient();
//   const jobs = await xata.db.Jobs.getAll();

//   return {
//     props: {
//       jobs: jobs.map(({ replace, ...job }) => job),
//     },
//   };
// }

