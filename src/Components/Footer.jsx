import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Gel Fuel Injector Team. All rights reserved.</p>
        <p>
          <a href="mailto:arghyadipmondal274@gmail.com" className="hover:underline">arghyadipmondal274@gmail.com</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
