import React from 'react'
import Typewriter from 'typewriter-effect'

const LandingTypewriter = () => {
  const phrases = [
    "Learn",
    "Create",
    "Problem Solve"
  ]

  return (
    <Typewriter 
      options={{
      wrapperClassName: 'typewriter',
      loop: true,
      autoStart: true, 
      strings: phrases,
      delay: 80,
      deleteSpeed: 20,
      }}
      onInit={typewriter => {
      typewriter
        .pauseFor(150)
        .deleteAll()
        .start()
    }}/>
  )
}

export default LandingTypewriter