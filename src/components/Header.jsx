import React from 'react';
import { NavLink } from 'react-router-dom';

const FooterNavigation = () => (
  <header  className="">

    <nav className="container mx-auto py-4">
      <div className="text-3xl  "> {/* Bottom margin added here for the title */}

        <div className="flex items-center justify-center h-full mb-8"> 
        <NavLink to="/" className="logo">
        <img
  className="logoImage w-30 h-30 rounded-full transform transition-all hover:scale-140"
  style={{ boxShadow: '0 15px 15px rgba(0, 0, 0, 0.6)' }}
  alt="clifton"
  src="https://media.licdn.com/dms/image/D5635AQFGsSd3_PpiBg/profile-framedphoto-shrink_200_200/0/1680210501089?e=1692216000&v=beta&t=JTv6NLPj06AOfE4Yp9-QL5dnLNafGrXXEhhvltD0iL0"
/>

</NavLink>

        </div>

        <div className="flex items-center justify-center h-full mb-8 nameTitle"> 
          <h1 className='font-special font-weight: 400'>Clifton D. Lucas</h1>
        </div>

        <div  className="homeAbout flex justify-between  "> {/* Top margin added here for the links */}
          <div className="homeNav "> {/* Bottom margin added here for individual link */}
            <NavLink to="/about" className="projectLink  transform transition-all hover:scale-140">
            <h2 className="font-special  transform transition-all hover:scale-140 ">ABOUT</h2>

            </NavLink>
          </div>
          <div className="aboutNav"> {/* Bottom margin added here for individual link */}
            <NavLink to="/projects" className="aboutLink transform transition-all hover:scale-140">
            <h2 className="font-special  transform transition-all hover:scale-140">PROJECTS</h2>
            </NavLink>
          </div>
          <div className="resumeNav">
    <a href="https://docs.google.com/document/d/13KTaaqoQfjT71w9VSf3iAkWxBFkFU01j/edit?usp=sharing&ouid=102500796025269348398&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="resumeLink transform transition-all hover:scale-140">
        <h2 className="font-special transform transition-all hover:scale-140">RESUME</h2>
    </a>
</div>

          
        </div>
      </div>
    </nav>
  </header>
);

export default FooterNavigation;
