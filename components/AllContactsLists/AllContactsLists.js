import Image from "next/image";
import Link from "next/link";

export default function AllContactsList({ allContacts }) {
  function getFirstLetter(character) {
    return character.charAt(0).toUpperCase();
  }

  return (
    <div>
         {console.log("allcontactsLists")}
      {allContacts ? (
        <div>
          {allContacts?.map(({ firstName, phoneNumber, id, imageUrl }) => (
            <div key={id}>
              <Link href={{ pathname: `contact/${id}` }}>
                <ul role='list' className='p-6 divide-y divide-slate-200'>
                  <li className='flex bg-gray-100 p-[10px] rounded-full'>
                    {imageUrl === "" ? (
                      <p className='self-center bg-pink-200 font-bold py-2 px-4 mr-2 rounded-full'>
                        {getFirstLetter(firstName)}
                      </p>
                    ) : (
                      <Image
                        className='h-10 w-10 rounded-full'
                        width={40}
                        height={40}
                        src={imageUrl}
                        alt=''
                      />
                    )}
                    <div className='ml-3 overflow-hidden'>
                      <p className='text-sm font-medium text-slate-900'>
                        {firstName}
                      </p>
                      <p className='text-sm text-slate-500 truncate'>
                        {phoneNumber}
                      </p>
                    </div>
                  </li>
                </ul>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className='flex items-center justify-center font-bold text-2xl'>
          <p>No data in the database</p>
        </div>
      )}
    </div>
  );
}
