import React from 'react';
import { NavLink } from 'react-router-dom';

const FooterNavigation = () => (
  <header  className="">

    <nav className="container mx-auto py-4">
      <div className="text-3xl   mb-4"> {/* Bottom margin added here for the title */}

        <div className="flex items-center justify-center h-full mb-8"> 
          <NavLink to="/" className="logo">
            <img
              // style={{ borderRadius: '50%' }} 
              className="logoImage w-30 h-30 rounded-full  transform transition-all hover:scale-140"
              alt="clifton"
              src="https://media.licdn.com/dms/image/D5635AQFGsSd3_PpiBg/profile-framedphoto-shrink_200_200/0/1680210501089?e=1692216000&v=beta&t=JTv6NLPj06AOfE4Yp9-QL5dnLNafGrXXEhhvltD0iL0"
            />
          </NavLink>
        </div>

        <div className="flex items-center justify-center h-full mb-8 nameTitle"> 
          <h1>Clifton D. Lucas</h1>
        </div>

        <div  className="homeAbout flex justify-between mt-4 mb-8"> {/* Top margin added here for the links */}
          <div className="homeNav mb-4"> {/* Bottom margin added here for individual link */}
            <NavLink to="/project" className="projectLink  transform transition-all hover:scale-140">
            <h2 className=" transform transition-all hover:scale-140">About</h2>

            </NavLink>
          </div>
          <div className="aboutNav mb-4"> {/* Bottom margin added here for individual link */}
            <NavLink to="/about" className="aboutLink transform transition-all hover:scale-140">
            <h2 className=" transform transition-all hover:scale-140">Project</h2>
            </NavLink>
          </div>
          <div className="resumeNav mb-4"> {/* Bottom margin added here for individual link */}
            <NavLink to="/resume" className="resumeLink  transform transition-all hover:scale-140">
            <h2 className=" transform transition-all hover:scale-140">Resume</h2>

            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  </header>
);

export default FooterNavigation;
