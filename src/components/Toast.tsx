import { useEffect } from 'react';

type ToastProps = {
  message: string;
  type: 'success' | 'error' | 'info';
  onClose: () => void;
};

const Toast = ({ message, type, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const textColor = 
    type === 'success' ? 'text-green-600' : 
    type === 'error' ? 'text-red-600' : 
    'text-blue-600';

  return (
    <div className={`fixed top-5 right-5 bg-white ${textColor} px-4 py-2 rounded shadow-lg z-50`}>
      {message}
    </div>
  );
};

export default Toast;