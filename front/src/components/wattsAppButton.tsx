import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';


interface WattsAppButtonProps {
  phoneNumber: String;
}

const WhatsAppButton: React.FC <WattsAppButtonProps> = ({ phoneNumber }) => {
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <div
      className="fixed bottom-4 right-4 bg-green-500 text-white p-2 rounded-full cursor-pointer hover:bg-green-600 transition-colors z-50"
      onClick={handleClick}
    >
      <FaWhatsapp className="text-4xl md:text-4x1" />
    </div>
  );
};

export default WhatsAppButton;
