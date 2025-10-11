'use client';
import {
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
  EmailShareButton,
  EmailIcon,
} from 'react-share';
import { FiShare2 } from 'react-icons/fi';
import { useState } from 'react';

const SingleProductShareButton = ({ id, name }: { id: string; name: string }) => {
  const url = `${name}: https://store-zeta-five.vercel.app/products/${id}`;
  const [show, setShow] = useState(false);
  return (
    <div
      className={`relative z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-gray-100 p-1 text-black transition duration-300 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700`}
    >
      <FiShare2 className='text-lg' onClick={() => setShow(!show)} />
      <div
        className={`absolute -top-20 -right-14 gap-2 rounded-lg bg-gray-300 px-3 lg:-right-0 dark:bg-gray-800 ${show ? 'flex' : 'hidden'}`}
      >
        <TwitterShareButton url={url}>
          <TwitterIcon round className='w-8' />
        </TwitterShareButton>
        <TelegramShareButton url={url}>
          <TelegramIcon round className='w-8' />
        </TelegramShareButton>
        <EmailShareButton url={url}>
          <EmailIcon round className='w-8' />
        </EmailShareButton>
      </div>
    </div>
  );
};

export default SingleProductShareButton;
