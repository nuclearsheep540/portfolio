import React from 'react'

const Projects = () => {
  return (
    <div className='section'>

      <section className="middle-center">
        <h2>Projects</h2>
      </section>

      <div className='flex-container s16'>
        <div className='column-wrapper'>

          <div className='flex-columns-2'>
            <h3>Deep Sea Battle: Shots Fired!</h3>
            <p>JavaScript, HTML5, CSS3</p>
            <p className="proj">My first project was a cell-based JavaScript game, combining concepts from battleships as well
              as minesweeper. I built a game full of game-logic, conditional checks, procedurally generated objects, and a
              smooth user experience across the game. The problem I enjoyed solving the most on this project was storing
              ship-tiles in arrays and checking tileset data before generating to ensuring ships generated on unique tiles.
            </p>
            <button className='proj'><a href='https://github.com/nuclearsheep540/deepsea' target='_blank' rel='noopener noreferrer'>Read More</a></button>
            <button className='proj'><a href='https://nuclearsheep540.github.io/deepsea/' target='_blank' rel='noopener noreferrer'>Launch</a></button>
          </div>

          <div className='flex-columns-2'>
            <h3>Gig-on-a-map</h3>
            <p>React JS, Express: Node.js, RESTful API</p>
            <p className="proj">During this hackathon, I focussed on getting MapboxGL to display music event data as markers,
              allowing a user to identify local gigs to their position for the current day and navigate around the map.
              Implementing MapboxGL was interesting, we used Uber’s library and viewport component to allow for easy interaction with the map.
            </p>
            <button className='proj'><a href='https://github.com/nuclearsheep540/deepsea' target='_blank' rel='noopener noreferrer'>Read More</a></button>
            <button className='proj'><a href='https://nuclearsheep540.github.io/deepsea/' target='_blank' rel='noopener noreferrer'>Launch</a></button>

          </div>

          <div className='flex-columns-2'>
            <h3>Skill Swap</h3>
            <p>React JS, Express: Node.js, MongoDB & Mongoose</p>
            <p className="proj">Skill Swap is a social platform to enable new and junior developers to meet and support each
              other throughout their early career. Our objective was to build a website that allowed users to build a
              personal profile, which enabled each other to recognise what languages & frameworks each other were familiar
              with. We used MongoDB to store user models and ‘requests’ models, and Mongoose parsed the data between all CRUD routes to our own built restful API.
            </p>
            <button className='proj'><a href='https://github.com/nuclearsheep540/deepsea' target='_blank' rel='noopener noreferrer'>Read More</a></button>
            <button className='proj'><a href='https://nuclearsheep540.github.io/deepsea/' target='_blank' rel='noopener noreferrer'>Launch</a></button>

          </div>

          <div className='flex-columns-2'>
            <h3>Whatify</h3>
            <p>React JS, Express: Node.js, Pythond, Django, postgreSQL</p>
            <p className="proj">Our main focus for this app was integrating open authentication with Spotify to process user
              listening data, curating randomised quizzes tailored to the user’s listening experience. Using a Python
              backend we were able to handle all user authentication and the large requests of data from the spotify user.
              We used Django to manage serialization and processing of user data to our own postgreSQL database enabling
                  us to build all quiz data with our local instance of data.</p>
            <button className='proj'><a href='https://github.com/nuclearsheep540/deepsea' target='_blank' rel='noopener noreferrer'>Read More</a></button>
            <button className='proj'><a href='https://nuclearsheep540.github.io/deepsea/' target='_blank' rel='noopener noreferrer'>Launch</a></button>

          </div>

        </div>
      </div>

    </div>
  )
}
export default Projects