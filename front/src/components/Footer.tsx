import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-white flex flex-col md:flex-row items-center bg-slate-800">
      <div className="container p-2 mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mt-2 md:mt-0">
          <a href="#" className="mr-3 md:mr-6 text-xl"><FaFacebook /></a>
          <a href="#" className="mr-3 md:mr-6 text-xl"><FaInstagram /></a>
        </div>
        <div className="mt-4 md:mt-0 text-xs">
          © 2023 Andréia Corretora. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
