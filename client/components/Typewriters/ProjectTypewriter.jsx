import React from 'react'
import Typewriter from 'typewriter-effect'

const LandingTypewriter = () => {
  const phrases = [
    "Learn and Grow",
    "Invent and Reinvent",
    ""
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