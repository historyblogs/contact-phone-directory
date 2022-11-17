import Link from "next/link";
import Image from "next/image";
import profileImage  from "../../public/michael.jpg"

const ContactList = ({ allContacts }) => {
 
  // Create a new array

  const newContacts = [];

  // use for each to go through the contactData and pick the dateAdded

  allContacts.forEach((contact) => {
    // split the dateAdded into date and time components
    //const date = contact.dateAdded.split("T")[0];
    //const time = contact.dateAdded.split("T")[1];
    // reformat the time string
    //const newTime = time.split(".")[0];
    // create a new object that contains the date, time, email, id, location, name, and phone and push it onto the list
    const newContact = {
      email: contact.email,
      id: contact.id,
      location: contact.location,
      firstName: contact.firstName,
      phoneNumber: contact.phoneNumber,
    };
    newContacts.push(newContact);
  });

  return (
    <div>
      {newContacts.length > 0 ? (
        <div>
          {newContacts.map(
            ({ firstName, lastName, phoneNumber, id, location, email }) => (
              <div key={id}>
                <Link href={{ pathname: `contact/${id}` }}>
                  <ul role='list' className='p-6 divide-y divide-slate-200'>
                    <li className='flex bg-gray-100 p-[10px] rounded-full'>
                      <Image
                        className='h-10 w-10 rounded-full'
                        width={40}
                        height={40}
                        src={profileImage}
                        alt=''
                      />
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
            )
          )}
        </div>
      ) : (
        <div className='flex items-center justify-center font-bold text-2xl'>
          <p>No data in the database</p>
        </div>
      )}
    </div>
  );
};

export default ContactList;
