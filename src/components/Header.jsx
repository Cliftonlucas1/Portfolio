import React from 'react';

import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="bg-blue border-b-4 border-gray-400 min-h-screen">
    <nav className="container mx-auto py-4 flex items-center justify-center ">
      <div className="flex flex-col items-center logoTitle">
        <NavLink to="/" className="logo mb-4">
          <img
            src="https://media.licdn.com/dms/image/D5635AQFGsSd3_PpiBg/profile-framedphoto-shrink_200_200/0/1680210501089?e=1692216000&v=beta&t=JTv6NLPj06AOfE4Yp9-QL5dnLNafGrXXEhhvltD0iL0"
            alt="clifton"
            className="logoImage w-10 h-10 rounded-full border-4 border-gray-600"
          />
        </NavLink>
        <h1 className="trillTrack text-2xl mb-4">Clifton D. Lucas</h1>
        <div className="homeAbout flex flex-row space-x-8">
          <div className="homeNav">
            <NavLink to="/project" className="projectLink text-gray-800">PROJECTS</NavLink>
          </div>
          <div className="aboutNav">
            <NavLink to="/about" className="aboutLink text-gray-800">ABOUT</NavLink>
          </div>
          <div className="resumeNav">
            <NavLink to="/resume" className="resumeLink text-gray-800">RESUME</NavLink>
          </div>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
