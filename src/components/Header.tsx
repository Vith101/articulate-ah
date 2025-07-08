import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
  <header className="bg-pink-950 text-white py-6 shadow-md">
    <div className="container mx-auto px-4 flex justify-between items-center">
      <Link to="/"><h1 className="text-2xl font-bold">Articulate Allied Health</h1></Link>
    </div>
  </header>
);

export default Header;
