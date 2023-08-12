import React from 'react';
import { NavLink } from 'react-router-dom';

const FooterNavigation = () => (
  <div className='</div>'>
  <footer className=" text-white m-0 p-0 ">
    <nav className="container mx-auto py-4 ">
      <div className="text-3xl ">
        <div className="flex items-center justify-between logoTitle">
          {/* Logo or additional content can be added here */}
        </div>
        <div className="homeAbout flex justify-between ">
       <div className="homeNav mr-4">
        <a href="https://github.com/Cliftonlucas1" className="projectLink text-white" target="_blank" rel="noopener noreferrer">
        <img style={{width: "3.2rem", height: "3.2rem"}} src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' alt='GitHub Logo' />
         </a>
      </div>
      <div className="aboutNav mr-4">
    <a href="https://www.linkedin.com/in/clifton-lucas-b80540121/" className="aboutLink text-white" target="_blank" rel="noopener noreferrer">
        <img style={{width: "3.2rem", height: "3.2rem"}} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAMAAAC4XpwXAAAAY1BMVEUAAAD///9oaGihoaH39/cdHR2enp7q6urU1NTLy8uzs7NRUVFubm7x8fH6+vqIiIgXFxdzc3Pe3t59fX2srKzk5OSYmJhEREQxMTG8vLzCwsJLS0snJyc2NjYMDAyOjo5dXV2mE2qbAAACO0lEQVRoge2b25KCMAxAWwXlLiC44A3+/ysXd3WEpmmlAp1dc14bepyCaRoGxnkQMhuEAeeMR1bcNyLOAmty1rntLPsvNt0EQRAEsSxrf0C2qDznApsF5XtRzp2v5exrYOcrspOd7GQn+5RsrNpXQB5flrMzX7TvFpR3e2wR9ChOi8oJgvhbpOcwyvb7bHVxrwurT2svfubJsm7G/YA0KLc98kYYj7zeaFkMxsLCgZuUNyZVb8WrhwLxrOM9h1qwRdxxDumLct1JCvy4R4e7qhH3je2LZ1FddQGW9r6uWQwv7FPPaS/U7o78ldU3sqeeVt5VKTPZz+DML8XDnG/YG+aWL8k5P0xvr8/gb4CRaPsQo+1jOFq1J7r3MLPahbw5uT2Ju+yPxzgz2pMgC6uUuWF2xELauexJfzeskB1nPZNdvKWNNErz1Jva4Sa2k4Vp0q2hXbaDSm/+HHaxAPohlUWqCy0juy+fS1ZvqJOtid1BTviZJFbdijCxY3VLmsDY/eR2NHtLdj91gWtgd9CaSVLySJ/Pd+zIM9cRwGB1hWFgx7OnpAE2uR1fTEm2Vb/lMbC36GSSZDu5vUIngwej6e34ZBHZ57QrajXY9J3cXn6wPf9gu+JgTHayk53sZCc72clO9g+1w0PvsKkOX3wpmp8hbBtpXkyC+GFj5ADGW8VksFeslrPKd/rEoPu7HYzn6gZcEQ+iffys/8DtA/tR18G4brJ0VDRBEARB/B/sfhNq93tYu98CW/0O+hvjOiLDe+oDAQAAAABJRU5ErkJggg==' alt='About Icon' />
        </a>
       </div>
       <div className="resumeNav">
    <a href="https://www.instagram.com/mr_prolific_/">
        <img style={{width: "3.2rem", height: "3.2rem"}} src='https://t4.ftcdn.net/jpg/03/97/47/93/360_F_397479323_YcgtZvNSd3rl40WR0XMiX6x7q4s7eCX3.jpg' alt='Email Icon' />
    </a>
</div>

          
<div className="resumeNav">
    <a href="mailto:cliftonlucas89@gmail.com" className="resumeLink text-white">
        <img style={{width: "3.2rem", height: "3.2rem"}} src='https://cdn.vectorstock.com/i/preview-1x/01/74/email-icon-vector-23190174.jpg' alt='Email Icon' />
    </a>
</div>

        </div>
      </div>
    </nav>
  </footer>
   <div className="flex justify-center items-center py-4">©2023 Clifton D. Lucas </div>
  </div>
);

export default FooterNavigation;
