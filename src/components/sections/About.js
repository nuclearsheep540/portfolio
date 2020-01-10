/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, ButtonFirst, ButtonLast } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'



const About = ({ className, id, nextId, backId, aboutMe, lastId, firstId }) => {

  return (


    <div className={className}>
      <section>
        <h1>HELLO WORLD</h1>
        <h2>My name is Matt and I'm a developer</h2>

        {/* slide text */}
        <div className='text-center'>
          <p className={id === -1 ? 'animated fadeIn fast' : 'hidden'}>Well, isn't that cheesey?</p>
          <p className={id === -1 ? 'stealth' : 'hidden'}>spacer</p>

          <p className={id === 0 ? 'animated fadeIn fast' : 'hidden'}>I love to build things</p>
          <p className={id === 0 ? 'stealth' : 'hidden'}>spacer</p>

          <p className={id === 1 ? 'animated fadeIn fast' : 'hidden'}>Not those kind of things</p>
          <p className={id === 1 ? 'stealth' : 'hidden'}>spacer</p>

          <p className={id === 2 ? 'stealth' : 'hidden'}>spacer</p>
          <p className={id === 2 ? 'stealth' : 'hidden'}>spacer</p>

          <p className={id === 3 ? 'animated fadeIn fast' : 'hidden'}>Previously, I built digital content and assets for web, all around the world, for big names and brands. </p>
          <p className={id === 3 ? 'animated fadeIn fast' : 'hidden'}> Now, I'm a full time full stack developer, always on the look for work.</p>

          <p className={id === 4 ? 'animated fadeIn fast' : 'hidden'}>Also, I'm a full-time geek; I love building custom pcs and love to game too. </p>
          <p className={id === 4 ? 'animated fadeIn fast' : 'hidden'}>I'm also hooked on anime and anything about space. When I'm not geeking out, I'm usually snowboarding or drinking</p>

          <p className={id === 5 ? 'animated fadeIn fast' : 'hidden'}>Want to chat about a project, or want a copy of my CV?</p>
          <p className={id === 5 ? 'animated fadeIn fast' : 'hidden'}>Then contact me on my website. Make sure to leave a valid email address in the form so I can get back to you!</p>
        </div>

        <CarouselProvider
          naturalSlideWidth={500}
          naturalSlideHeight={500}
          totalSlides={7}
        >

          <Slider>
            <Slide index={0}>
              <img src='https://media.giphy.com/media/TGq2OgACJPAZO/giphy.gif' className='gif' ></img>
              {/* bear wave */}
            </Slide>

            <Slide index={1}>
              <img src='https://media.giphy.com/media/ZA3hq5fAIsQPS/giphy-downsized-large.gif' className='gif'></img>
              {/* lego build */}
            </Slide>

            <Slide index={2}>
              <img src='https://media.giphy.com/media/QB78LMb32YqoE/200w_d.gif' className='gif'></img>
              {/* gif cry */}
            </Slide>

            <Slide index={3}>
              <img src='https://media.giphy.com/media/fnuSiwXMTV3zmYDf6k/giphy-downsized.gif' className='gif'></img>
              {/* kazoo kid */}
            </Slide>

            <Slide index={4}>
              <iframe className='map' src='../components/Map.html'></iframe>
            </Slide>

            <Slide index={5}>
              <img src='https://media.giphy.com/media/JSf51ChnoltKM/giphy.gif' className='gif'></img>
              {/* nerd */}
            </Slide>

            <Slide index={6}>
              <img src='https://media.giphy.com/media/Cu0Iqwal4cPyU/giphy.gif' className='gif'></img>
              {/* sailor moon */}
            </Slide>
          </Slider>

          <div className='car-buttons'>
            <ButtonFirst 
              className={id === 5 ? '' : 'hidden'}
              onClick={firstId}
            >
              First
            </ButtonFirst>

            <ButtonBack onClick={backId}>Back</ButtonBack>
            <ButtonNext onClick={nextId}>Next</ButtonNext>

            <ButtonLast
              className={id === 5 ? 'hidden' : ''}
              onClick={lastId}
            >
              Last
            </ButtonLast>
          </div>

          <button className='car-close' onClick={aboutMe}>Close</button>
          
        </CarouselProvider>
        
      </section>
    </div>



  )
}
export default About