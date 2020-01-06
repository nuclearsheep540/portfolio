import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, ButtonFirst, ButtonLast } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

const Projects = () => {
  return (
    <div className='section rightCar'>



      <CarouselProvider
        naturalSlideWidth={1000}
        naturalSlideHeight={500}
        totalSlides={4}
      >
        <ButtonFirst>First</ButtonFirst>
        <ButtonBack>Back</ButtonBack>

        <Slider>
          <Slide index={0}>
            <div className=''>

              <div className='left'>
                <div>
                  <h3>App Image</h3>
                </div>
              </div>

              <h3>Whatify</h3>
              <p>React JS, Express: Node.js, Python, Django, postgreSQL</p>
              <p className="h400">Our main focus for this app was integrating open authentication with Spotify to process user
              listening data, curating randomised quizzes tailored to the user’s listening experience. Using a Python
              backend we were able to handle all user authentication and the large requests of data from the spotify user.
              We used Django to manage serialization and processing of user data to our own postgreSQL database enabling
                  us to build all quiz data with our local instance of data.</p>
              <button className='bottom'><a href='https://github.com/nuclearsheep540/deepsea' target='_blank' rel='noopener noreferrer'>Read More</a></button>
              <button className='bottom'><a href='https://nuclearsheep540.github.io/deepsea/' target='_blank' rel='noopener noreferrer'>Launch</a></button>
            </div>
          </Slide>

          <Slide index={1}>
            <div className=''>

              <div className='left'>
                <div>
                  <h3>App Image</h3>
                </div>
              </div>

              <h3>Skill Swap</h3>
              <p>React JS, Express: Node.js, MongoDB & Mongoose</p>
              <p className="h400">Skill Swap is a social platform to enable new and junior developers to meet and support each
              other throughout their early career. Our objective was to build a website that allowed users to build a
              personal profile, which enabled each other to recognise what languages & frameworks each other were familiar
              with. We used MongoDB to store user models and ‘requests’ models, and Mongoose parsed the data between all CRUD routes to our own built restful API.
              </p>
              <button className='bottom'><a href='https://github.com/nuclearsheep540/deepsea' target='_blank' rel='noopener noreferrer'>Read More</a></button>
              <button className='bottom'><a href='https://nuclearsheep540.github.io/deepsea/' target='_blank' rel='noopener noreferrer'>Launch</a></button>
            </div>
          </Slide>

          <Slide index={2}>
            <div className=''>

              <div className='left'>
                <div>
                  <h3>App Image</h3>
                </div>
              </div>

              <h3>Gig-on-a-map</h3>
              <p>React JS, Express: Node.js, RESTful API</p>
              <p className="h400">During this hackathon, I focussed on getting MapboxGL to display music event data as markers,
              allowing a user to identify local gigs to their position for the current day and navigate around the map.
              Implementing MapboxGL was interesting, we used Uber’s library and viewport component to allow for easy interaction with the map.
              </p>
              <button className='bottom'><a href='https://github.com/nuclearsheep540/deepsea' target='_blank' rel='noopener noreferrer'>Read More</a></button>
              <button className='bottom'><a href='https://nuclearsheep540.github.io/deepsea/' target='_blank' rel='noopener noreferrer'>Launch</a></button>
            </div>
          </Slide>

          <Slide index={3}>
            <div className=''>

              <div className='left'>
                <div>
                  <h3>App Image</h3>
                </div>
              </div>

              <h3>Deep Sea Battle: Shots Fired!</h3>
              <p>JavaScript, HTML5, CSS3</p>
              <p className="h400">My first project was a cell-based JavaScript game, combining concepts from battleships as well
              as minesweeper. I built a game full of game-logic, conditional checks, procedurally generated objects, and a
              smooth user experience across the game. The problem I enjoyed solving the most on this project was storing
              ship-tiles in arrays and checking tileset data before generating to ensuring ships generated on unique tiles.
              </p>
              <button className='bottom'><a href='https://github.com/nuclearsheep540/deepsea' target='_blank' rel='noopener noreferrer'>Read More</a></button>
              <button className='bottom'><a href='https://nuclearsheep540.github.io/deepsea/' target='_blank' rel='noopener noreferrer'>Launch</a></button>
            </div>
          </Slide>
        </Slider>

        <ButtonNext>Next</ButtonNext>
        <ButtonLast>Last</ButtonLast>

      </CarouselProvider>


    </div>
  )
}
export default Projects