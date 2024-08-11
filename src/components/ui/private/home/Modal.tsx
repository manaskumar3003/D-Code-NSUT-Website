import { useEffect } from 'react';

export default function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 m-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div
        className="absolute inset-0"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-lg p-6 w-full max-w-xs md:max-w-sm lg:max-w-md ">
        {children}
      </div>
    </div>
  );
}
