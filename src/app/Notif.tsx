'use client';

import { useEffect, useState } from 'react';

const Notif = () => {
  const [show, setShow] = useState<boolean>(true);

  useEffect(() => {
    const guide = JSON.parse(localStorage.getItem('guide') || 'null');
    console.log(guide);
    if (guide !== null) setShow(guide);
    if (show) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [show]);

  if (show)
    return (
      <div className='fixed inset-0 z-50 h-full w-full'>
        <div
          onClick={() => {
            setShow(false);
            localStorage.setItem('guide', JSON.stringify(false));
          }}
          className='absolute inset-0 z-40 h-full w-full bg-black/70 backdrop-blur-xs transition-opacity duration-300'
        ></div>
        <div
          className={`absolute top-1/2 left-1/2 z-50 flex h-96 w-96 -translate-x-1/2 -translate-y-1/2 flex-col justify-center gap-4 rounded-2xl border border-gray-700 bg-gray-900/95 px-6 backdrop-blur-md`}
        >
          <h1 className='text-2xl font-bold text-white'>Discover More!</h1>
          <p className='leading-relaxed text-gray-200'>
            This website has exclusive pages and features, including a dedicated admin panel. Log in
            to unlock the full experience.
          </p>
          <div className='space-y-3'>
            <p className='text-sm text-gray-300'>Try it with demo credentials:</p>
            <div className='space-y-2 rounded-lg bg-gray-800/50 p-3'>
              <div className='flex items-center gap-2'>
                <span className='text-xs text-gray-400'>Email:</span>
                <code className='rounded bg-gray-700 px-2 py-1 font-mono text-sm text-white'>
                  test@test.com
                </code>
              </div>
              <div className='flex items-center gap-2'>
                <span className='text-xs text-gray-400'>Password:</span>
                <code className='rounded bg-gray-700 px-2 py-1 font-mono text-sm text-white'>
                  testUser@
                </code>
              </div>
            </div>
          </div>
          <div className='pt-2'>
            <p className='mb-2 text-sm text-gray-300'>Or visit the README file for this project:</p>
            <a
              href='https://github.com/abbasbayat0/store/blob/master/README.md'
              className='text-blue-400 underline transition-colors duration-200 hover:text-blue-300'
              target='_blank'
              rel='noopener noreferrer'
            >
              README
            </a>
          </div>
        </div>
      </div>
    );
};

export default Notif;
