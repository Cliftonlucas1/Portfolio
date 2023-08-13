import React from 'react';

const About = () => {
  return (
    <div 
      className="flex flex-col items-center justify-center relative border border-red-500 text-2xl m-0 p-0"
      style={{ width: "100vw", height: "45vh" }}>
      <h1>Full-Stack Developer</h1>
      <div></div> {/* Page break */}
      <h2 className="mb-4">Chicago, IL</h2>
      <div style={{ paddingBottom: '10px' }}></div> {/* Page break */}
      <p className="mb-4">
        I am a techie who enjoys crafting digital masterpieces. 
      </p>
      <p className="mb-4">
        I'm now blending tech skills with life's lessons and always ready to embrace new adventures. 
      </p>
      <p className="mb-4">
        Professionally and personally my focus is on progress
      </p>
      <p className="mb-4">
        Let's turn ideas into vibrant digital realities together! 🚀
      </p>
    </div>
  )
}

export default About;
