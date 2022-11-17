import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";


const AddContact = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  // const [dateAdded, setDateAdded] = useState();
  const [imageSrc, setImageSrc] = useState();

  async function submit(e){
    e.preventDefault();
    let response;
    if (imageSrc) {
      const body = new FormData();
      body.append('upload_preset', 'ufa6exrd');

      body.append('file', imageSrc);

      response = await fetch(
        'https://api.cloudinary.com/v1_1/fatimaola/image/upload',
        {
          method: 'POST',
          body,
        }
      ).then((r) => r.json());
    }

    fetch('/api/add-contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        phoneNumber,
        location,
        email,
        image_url: response.secure_url,
      }),
    }).then(() => 
    router.push('/'));
  }

  console.log("data", firstName, lastName, phoneNumber, location, email)
  // const handleSubmit = (e)=>{
  //   e.preventDefault();
  //   submit();
  // }

  
  return (
    <>
      <header className='border-b border-gray-100'>
        <div className='max-w-7xl mx-auto w-4/5 my-5'>
          <div className='flex items-center justify-between'>
            <Link href={"/"}>
              <span className='font-bold whitespace-nowrap tracking-wide'>
                All Contacts
              </span>
            </Link>
          </div>
        </div>
      </header>
      <section className='mx-auto w-[50%]'>
        <form>
          <p className="mt-[30px] mb-[30px] font-medium">Add New Contact</p>
          <div className='mb-5'>
            <label htmlFor='firstName' className='block'>
              First Name
            </label>
            <input
              type='text'
              name='firstName'
              onChange={(e) => setFirstName(e.target.value)}
              className='border-2 p-1 w-full mt-1'
            />
          </div>
          <div className='mb-5'>
            <label htmlFor='lastName' className='block'>
              Last Name
            </label>
            <input
              type='text'
              name='lastName'
              id='lastName'
              onChange={(e) => setLastName(e.target.value)}
              className='border-2 p-1 w-full mt-1'
            />
          </div>
          <div className='mb-5'>
            <label htmlFor='phoneNumber' className='block'>
              Phone Number
            </label>
            <input
              type='tel'
              name='phoneNumber'
              id='phoneNumber'
              onChange={(e) => setPhoneNumber(e.target.value)}
              className='border-2 p-1 w-full mt-1'
            />
          </div>
          <div className='mb-5'>
            <label htmlFor='location' className='block'>
              Location
            </label>
            <input
              type='text'
              name='location'
              id='location'
              onChange={(e) => setLocation(e.target.value)}
              className='border-2 p-1 w-full mt-1'
            />
          </div>

          <div className='mb-5'>
            <label htmlFor='email' className='block'>
              Email Address
            </label>
            <input
              type='email'
              name='email'
              id='email'
              onChange={(e) => setEmail(e.target.value)}
              className='border-2 p-1 w-full mt-1'
            />
          </div>
          {/* <div className='mb-8'>
            <label htmlFor='date' className='block'>
              Date Created
            </label>
            <input
              type='datetime-local'
              name='dateAdded'
              id='dateAdded'
              onChange={(e) => setDateAdded(e.target.value)}
              className='border-2 p-1 w-full mt-1'
            />
          </div> */}
          <div className='mb-8'>
            <label htmlFor='image' className='block'>
              Add Image
            </label>
            <input
              type='file'
              name='image'
              onChange={(e) => setImageSrc(e.target.files[0])}
            />
          </div>      
          <button
           onClick={submit}
            type='submit'
            className='bg-blue-600 text-gray-50 py-2 px-6 tracking-wide whitespace-nowrap flex-shrink-0 float-right mb-10'
          >
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default AddContact;
