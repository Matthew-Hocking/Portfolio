import React from 'react'

const AboutMe = () => {
  return (
    <div className="container">
      <div className='profile-container'>
        <img id="profile-image" src="images/profile.png" alt='profile image of Matthew Hocking' />
        <h1 id="heading">Kia ora, I'm a Front-end Developer from 🥝 New Zealand 🥝</h1>
        <div className='profile-blurb'>
          <p>
            Ever since I was a toddler I've enjoyed pulling things apart:
            Toys, old radios, knick-knacks. This wan't chaotic destruction, this was always a process of learning. I would learn what things were made of, how their peices fit together, and how things worked.
            <br></br>
            <br></br>
            Of course putting things back together was important, and so I developed skills of fixing, problem-solving, and creating solutions.
            <br></br>
            <br></br>
            That's why I love development. I learned coding the same way I learnt as a kid, pulling things apart to see the little pieces, even breaking code to see how things DIDN'T work. I wanted to learn not just how things worked but why they worked.
            <br></br>
            <br></br>
            I love to learn, build, create, solve, design. 
            <br></br>
            Everything. 
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe