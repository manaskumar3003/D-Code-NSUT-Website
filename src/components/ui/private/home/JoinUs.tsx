"use client"

import { useState } from 'react';
import Modal from './Modal';

export default function JoinUs() {
  const [isJoin, setJoin] = useState(false);
  const [isContact, setContact] = useState(false);

  return (
    <div className="flex flex-col gap-4 md:flex-row ">
      <div
        onClick={() => setJoin(true)}
        className="py-3 px-6 inline-flex justify-center items-center gap-x-2 font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
      >
        Join Us
        <svg
          className="flex-shrink-0 size-4"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </div>

      <Modal isOpen={isJoin} onClose={() => setJoin(false)}>
        <h1 className="text-4xl font-semibold mb-6">Join Us</h1>
        <div className='flex flex-col gap-1 text-lg lg:text-xl ps-5'>
        <a href="https://chat.whatsapp.com/B5AKAK4nZ2M1VRzjxKM9cy" target='_blank'>Whatsapp Group</a>
        <a href="https://www.instagram.com/dcode_nsut/" target='_blank'>Instagram</a>
        <a href="https://www.linkedin.com/company/dcode-nsut/" target='_blank'>Linkedin</a>
        </div>
      </Modal>

      <button
        onClick={() => setContact(true)}
        className="py-3 px-4 text-sm font-medium rounded-lg border border-gray-200 text-gray-800"
      >
        Contact Us
      </button>

      <Modal isOpen={isContact} onClose={() => setContact(false)}>
        <h1 className="text-4xl font-semibold mb-6">Contact Us</h1>
        <div className='flex flex-col gap-1 text-lg lg:text-xl ps-5'>
        <a href="mailto:dcodensut@gmail.com" target='_blank'>Mail Us</a>
        <a href="https://www.instagram.com/dcode_nsut/" target='_blank'>Instagram</a>
        <a href="https://www.linkedin.com/company/dcode-nsut/" target='_blank'>Linkedin</a>
        </div>
      </Modal>
    </div>
  );
}
