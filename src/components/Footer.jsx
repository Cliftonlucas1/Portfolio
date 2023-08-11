import React from 'react';
import { NavLink } from 'react-router-dom';

const FooterNavigation = () => (
  <footer className="bg-gray-800 text-white mt-10">
    <nav className="container mx-auto py-4">
      <div className="text-3xl font-bold underline">
        <div className="flex items-center justify-between logoTitle">
          {/* Logo or additional content can be added here */}
        </div>
        <div className="homeAbout flex justify-between mt-4">
          <div className="homeNav mr-4">
            <NavLink to="/project" className="projectLink text-white">
              <img className="w-8 h-8" src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' alt='GitHub Logo' />
            </NavLink>
          </div>
          <div className="aboutNav mr-4">
            <NavLink to="/about" className="aboutLink text-white">
            <img className="w-8 h-8" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAMAAAC4XpwXAAAAY1BMVEUAAAD///9oaGihoaH39/cdHR2enp7q6urU1NTLy8uzs7NRUVFubm7x8fH6+vqIiIgXFxdzc3Pe3t59fX2srKzk5OSYmJhEREQxMTG8vLzCwsJLS0snJyc2NjYMDAyOjo5dXV2mE2qbAAACO0lEQVRoge2b25KCMAxAWwXlLiC44A3+/ysXd3WEpmmlAp1dc14bepyCaRoGxnkQMhuEAeeMR1bcNyLOAmty1rntLPsvNt0EQRAEsSxrf0C2qDznApsF5XtRzp2v5exrYOcrspOd7GQn+5RsrNpXQB5flrMzX7TvFpR3e2wR9ChOi8oJgvhbpOcwyvb7bHVxrwurT2svfubJsm7G/YA0KLc98kYYj7zeaFkMxsLCgZuUNyZVb8WrhwLxrOM9h1qwRdxxDumLct1JCvy4R4e7qhH3je2LZ1FddQGW9r6uWQwv7FPPaS/U7o78ldU3sqeeVt5VKTPZz+DML8XDnG/YG+aWL8k5P0xvr8/gb4CRaPsQo+1jOFq1J7r3MLPahbw5uT2Ju+yPxzgz2pMgC6uUuWF2xELauexJfzeskB1nPZNdvKWNNErz1Jva4Sa2k4Vp0q2hXbaDSm/+HHaxAPohlUWqCy0juy+fS1ZvqJOtid1BTviZJFbdijCxY3VLmsDY/eR2NHtLdj91gWtgd9CaSVLySJ/Pd+zIM9cRwGB1hWFgx7OnpAE2uR1fTEm2Vb/lMbC36GSSZDu5vUIngwej6e34ZBHZ57QrajXY9J3cXn6wPf9gu+JgTHayk53sZCc72clO9g+1w0PvsKkOX3wpmp8hbBtpXkyC+GFj5ADGW8VksFeslrPKd/rEoPu7HYzn6gZcEQ+iffys/8DtA/tR18G4brJ0VDRBEARB/B/sfhNq93tYu98CW/0O+hvjOiLDe+oDAQAAAABJRU5ErkJggg==' alt='About Icon' />
            </NavLink>
          </div>
          <div className="resumeNav" >
            <NavLink to="/resume" className="resumeLink text-white">
             <img className="w-8 h-8" src='https://cdn.vectorstock.com/i/preview-1x/01/74/email-icon-vector-23190174.jpg' alt='Email Icon' />
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  </footer>
);

export default FooterNavigation;
