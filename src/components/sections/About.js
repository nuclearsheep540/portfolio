import React from 'react'

const About = ({ className, id }) => {
  return (
    <div className={'carousel'}>

      <section id='about1' className={id !== 1 ? className : ''}>
        <h2>Hello World, </h2>
        <h3>My name is Matt and I'm a developer</h3>
      </section>

      <section id='about2' className={id !== 2 ? className : ''}>
        <p>Now that sounds a bit too cheesey, doesn't it?</p>
        {/* bear wave */}
        <img src='https://media.giphy.com/media/fdcibA8CVjFFS/giphy.gif' className='gif'></img>
      </section>

      <section id='about3' className={id !== 3 ? className : ''}>
        <p>I have a passion for building things and I'm looking to start a new career as a Full Stack Developer </p>
        {/* lego build */}
        <img src='https://media.giphy.com/media/ZA3hq5fAIsQPS/giphy-downsized-large.gif' className='gif'></img>
      </section>

      <section id='about4' className={id !== 4 ? className : ''}>
        <p>No, not that kind of building</p>
        {/* gif cry */}
        <img src='https://media.giphy.com/media/QB78LMb32YqoE/200w_d.gif' className='gif'></img>
      </section>

      <section id='about5' className={id !== 5 ? className : ''}>
        <p>Who am I anyway?</p>
        {/* kazoo kid */}
        <img src='https://media.giphy.com/media/fnuSiwXMTV3zmYDf6k/giphy-downsized.gif' className='gif'></img>
      </section>

      <section id='about6' className={id !== 6 ? className : ''}>
        <p>Well, I've worked all around the world helping big brands and names create and deliver digital content for the web </p>
        <iframe className='map' src='../Map.html'></iframe>
      </section>

      <section id='about7' className={id !== 7 ? className : ''}>
        <p>Also, I'm a full-time geek; I love building custom pcs and love to game too. I'm also hooked on anime and anything about space. When I'm not geeking out, I'm usually snowboarding or drinking</p>
        {/* nerd */}
        <img src='https://media.giphy.com/media/yODVOeMxWBwBO/giphy.gif' className='gif'></img>
      </section>

      <section id='about8' className={id !== 8 ? className : ''}>
        <p>Want to chat about a project, or want a copy of my CV? Then contact me on my website.</p>
        <p>Make sure to leave a valid email address in the form so I can get back to you!</p>
        {/* call me */}
        <img src='https://media.giphy.com/media/JSf51ChnoltKM/giphy.gif' className='gif'></img>
      </section>

    </div>
  )

}
export default About