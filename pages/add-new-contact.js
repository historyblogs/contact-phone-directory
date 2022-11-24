/* eslint-disable @next/next/no-sync-scripts */
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import Footer from "../components/Footer";

const AddContact = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const openupWidget = () => {
    window.cloudinary
      .openUploadWidget(
        { cloud_name: "fatimaola", upload_preset: "ufa6exrd" },
        (error, result) => {
          if (!error && result && result.event === "success") {
            setImageUrl(result.info.url);
          }
        }
      )
      .open();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/add-contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        phoneNumber,
        location,
        email,
        imageUrl: imageUrl,
      }),
    }).then(() => router.push("/"));
  };



  return (
    <>
      <Head>
        <script
          src='https://upload-widget.cloudinary.com/global/all.js'
          type='text/javascript'
        />
      </Head>
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
          <p className='mt-[30px] mb-[30px] font-medium'>Add New Contact</p>
          <div className='mb-5'>
            <label htmlFor='firstName' className='block'>
              First Name
            </label>
            <input
              type='text'
              name='firstName'
              onChange={(e) => setFirstName(e.target.value)}
              required
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
              required
              onChange={(e) => setLastName(e.target.value)}
              className='border-2 p-1 w-full mt-1'
            />
          </div>
          <div className='mb-5'>
            <label htmlFor='phoneNumber' className='block'>
              Phone Number
            </label>
            <input
              type='text'
              name='phoneNumber'
              id='phoneNumber'
              required
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
              required
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
              required
              onChange={(e) => setEmail(e.target.value)}
              className='border-2 p-1 w-full mt-1'
            />
          </div>
          <div className='mb-5'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              type='button'
              onClick={openupWidget}
            >
              Upload Image
            </button>
          </div>
          <div className="flex justify-end">
          <button
            type='submit'
            onClick={handleSubmit}
            className='bg-blue-600 text-gray-50 py-2 px-6 tracking-wide whitespace-nowrap  mb-10'
          >
            Submit
          </button>
          </div>
          
        </form>
      </section>
        <div className='border-t border-gray-100'>
        <Footer />
      </div>
    </>
  );
};

export default AddContact;
