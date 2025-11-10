'use client';

import { SignInButton } from '@clerk/nextjs';
import { useState, useEffect } from 'react';

const NotificationModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has dismissed the modal before
    const hasSeenNotification = localStorage.getItem('hasSeenNotification');
    if (!hasSeenNotification) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Remember user's choice for future visits
    localStorage.setItem('hasSeenNotification', 'true');
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleEscapeKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClose();
    }
  };

  useEffect(() => {
    if (isVisible) {
      document.addEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center p-4'
      role='dialog'
      aria-modal='true'
      aria-labelledby='modal-title'
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div
        className='absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300'
        aria-hidden='true'
      />

      {/* Modal */}
      <div className='relative z-10 w-full max-w-md scale-100 transform opacity-100 transition-all duration-300'>
        <div className='rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 p-6 shadow-2xl'>
          {/* Header */}
          <div className='mb-4 flex items-center justify-between'>
            <h2 id='modal-title' className='text-2xl font-bold text-white'>
              🚀 Discover More!
            </h2>
            <button
              onClick={handleClose}
              className='rounded-lg p-1 text-gray-400 transition-colors duration-200 hover:bg-gray-700 hover:text-white'
              aria-label='Close notification'
            >
              <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className='space-y-4'>
            <p className='leading-relaxed text-gray-200'>
              This website has exclusive pages and features, including a dedicated admin panel.
              <strong className='mt-2 block text-white'>
                Log in to unlock the full experience!
              </strong>
            </p>

            {/* Demo Credentials */}
            <div className='rounded-lg border border-gray-700 bg-gray-800/50 p-4'>
              <p className='mb-3 text-sm font-medium text-gray-300'>
                Try it out with demo credentials:
              </p>
              <div className='space-y-2'>
                <div className='flex items-center justify-between'>
                  <span className='text-sm text-gray-400'>Email:</span>
                  <code className='rounded bg-gray-900 px-2 py-1 font-mono text-sm text-white'>
                    test@test.com
                  </code>
                </div>
                <div className='flex items-center justify-between'>
                  <span className='text-sm text-gray-400'>Password:</span>
                  <code className='rounded bg-gray-900 px-2 py-1 font-mono text-sm text-white'>
                    testUser@
                  </code>
                </div>
              </div>
            </div>

            {/* Documentation Link */}
            <div className='pt-2'>
              <p className='mb-3 text-sm text-gray-300'>For detailed documentation, visit:</p>
              <a
                href='https://github.com/abbasbayat0/store/blob/master/README.md'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 font-medium text-blue-400 transition-colors duration-200 hover:text-blue-300'
              >
                <svg className='h-4 w-4' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                </svg>
                View README on GitHub
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className='mt-6 flex gap-3 border-t border-gray-700 pt-4'>
            <button
              onClick={handleClose}
              className='flex-1 rounded-lg border border-gray-600 px-4 py-2 text-gray-300 transition-colors duration-200 hover:border-gray-500 hover:text-white'
            >
              Explore First
            </button>
            <SignInButton>
              <p
                className='flex-1 cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-center font-medium text-white transition-colors duration-200 hover:bg-blue-500'
                onClick={handleClose}
              >
                Log In Now
              </p>
            </SignInButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;
