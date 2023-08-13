import React from 'react'

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{ width: '130%', height: '55vh' }}
    >
      <h2 className="mb-4">Full-Stack Developer</h2>
      <div style={{ paddingBottom: '20px' }}></div> {/* Page break */}
      <h3 className="mb-4">Chicago, IL</h3>
      <div style={{ paddingBottom: '20px' }}></div> {/* Page break */}
      <p className="text-center">
        I am a techie who enjoys crafting digital masterpieces. I'm now blending
        tech skills with life's lessons and always ready to embrace new
        adventures. Let's turn ideas into vibrant digital realities together! 🚀
      </p>
    </div>
  )
}

export default About
