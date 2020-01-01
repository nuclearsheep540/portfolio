/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'



const About = ({ className, id }) => {
  return (
    <div className='section'>

      <CarouselProvider
        naturalSlideWidth={1000}
        naturalSlideHeight={500}
        totalSlides={8}
      >

        <Slider>
          <Slide index={0}>
            <section id='about1' className={id !== 1 ? className : ''}>
              <h2>Hello World, </h2>
              <h3>My name is Matt and I'm a developer</h3>
            </section>
          </Slide>

          <Slide index={1}>
            <section id='about2' className={id !== 2 ? className : ''}>
              <img src='https://media.giphy.com/media/fdcibA8CVjFFS/giphy.gif' className='gif'></img>
              <p>Well, isn't that a bit cheesey?</p>
              {/* bear wave */}
            </section>
          </Slide>

          <Slide index={2}>
            <section id='about3' className={id !== 3 ? className : ''}>
              <img src='https://media.giphy.com/media/ZA3hq5fAIsQPS/giphy-downsized-large.gif' className='gif'></img>
              <p>I love to build things</p>
              {/* lego build */}
            </section>
          </Slide>

          <Slide index={3}>
            <section id='about4' className={id !== 4 ? className : ''}>
              <img src='https://media.giphy.com/media/QB78LMb32YqoE/200w_d.gif' className='gif'></img>
              <p>Not those kind of things</p>
              {/* gif cry */}
            </section>
          </Slide>

          <Slide index={4}>
            <section id='about5' className={id !== 5 ? className : ''}>
              <img src='https://media.giphy.com/media/fnuSiwXMTV3zmYDf6k/giphy-downsized.gif' className='gif'></img>
              <p>So what do I do?</p>
              {/* kazoo kid */}
            </section>
          </Slide>

          <Slide index={5}>
            <section id='about6' className={id !== 6 ? className : ''}>
              <iframe className='map' src='../Map.html'></iframe>
              <p>I build digital content and assets for web, all around the world, for big names and brands.</p>
            </section>
          </Slide>

          <Slide index={6}>
            <section id='about7' className={id !== 7 ? className : ''}>
              <img src='https://media.giphy.com/media/yODVOeMxWBwBO/giphy.gif' className='gif'></img>
              <p>Also, I'm a full-time geek; I love building custom pcs and love to game too. I'm also hooked on anime and anything about space. When I'm not geeking out, I'm usually snowboarding or drinking</p>
              {/* nerd */}
            </section>
          </Slide>

          <Slide index={7}>
            <section id='about8' className={id !== 8 ? className : ''}>
              <img src='https://media.giphy.com/media/JSf51ChnoltKM/giphy.gif' className='gif'></img>
              <p>Want to chat about a project, or want a copy of my CV? Then contact me on my website. Make sure to leave a valid email address in the form so I can get back to you!</p>
              {/* call me */}
            </section>
          </Slide>
        </Slider>

        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>

      </CarouselProvider>

      {/* end of track */}
    </div>
  )
}
export default About