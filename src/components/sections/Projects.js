import React from 'react'


const Projects = ({ projectShow }) => {

  return (
    <div className='block'>

      <div className='coverflow'>
        <ul id="menu">
          <li id='deepseali'> <a href="#" name='deepsea' onClick={projectShow}>Item 1</a> </li>
          <li id='gigonamapli'> <a href="#" name='gigonamap' onClick={projectShow}>Item 2</a> </li>
          <li id='whatifyli'> <a href="#" name='whatify' onClick={projectShow}>Item 3</a> </li>
          <li id='gonsalvesli'> <a href="#" name='gonsalves' onClick={projectShow}>Item 4</a> </li>
          <li id='skillswapli'> <a href="#" name='skillswap' onClick={projectShow}>Item 5</a> </li>
        </ul>
      </div>

      <div className='pct60'>

        <div className='hidden proj-select' id='gonsalves'>
          <h3>Gonsalves Fitness</h3>
          <p>Technology: MERN Stack, Google Firebase, REST API, CRUD</p>
          <p className='stealth'>Build Time: 14 days</p>
          <div className="h400">Gonsalves Fitness is the first website I built as a freelance developer. It&apos;s a simple website with react front end to display information about the personal trainer.

            <p>A proxy server is being run to deliver data between an API injection email service, which runs behind the contact form.</p>

            <p>I have also built a backend for my client, a simple CMS tool to help them publish success stories on their website. This is a basic setup with MongoDB and simple models which outline a template for content publishing.</p>

            <p>All backend pages are secure with authentication checks, and data is being encrypted for secuirty.</p>
          </div>
          <button className='bottom'><a href='' target='_blank' rel='noopener noreferrer'>Github</a></button>
          <button className='bottom'><a href='' target='_blank' rel='noopener noreferrer'>Launch</a></button>
        </div>


        <div className='hidden proj-select' id='whatify'>
          <h3>WHATIFY</h3>
          <p>Technology: React, Express, Node, Python, Django, postgreSQL</p>
          <p>Build Time: 7 days</p>
          <div className="h400">Our main focus for this app was integrating open authentication with Spotify to process user
          listening data, curating randomised quizzes tailored to the user’s listening experience. Using a Python
          backend we were able to handle all user authentication and the large requests of data from the spotify user.
          We used Django to manage serialization and processing of user data to our own postgreSQL database enabling
                  us to build all quiz data with our local instance of data.
          </div>
          <button className='bottom'><a href='https://github.com/nuclearsheep540/whatify' target='_blank' rel='noopener noreferrer'>Github</a></button>
          <button className='bottom'><a href='http://www.whatify.me' target='_blank' rel='noopener noreferrer'>Launch</a></button>
        </div>



        <div className='hidden proj-select' id='skillswap'>
          <h3>SKILL SWAP</h3>
          <p>Technology: MERN Stack, CRUD</p>
          <p>Build Time: 10 days</p>
          <div className="h400">Skill Swap is a social platform to enable new and junior developers to meet and support each
          other throughout their early career. Our concept was that a user&apos;s personal profile information would act as meta-data which could be paired against help request posts, this would bring people together as the relationships between user data and request data, would return true when these two data types matched.

          <p>To enable this service we had to focus a lot of details in our schematics in Mongo, and also test that data was being modelled correctly. A majority of the front end is a matter of CRUD routes to our backend as we had to build routes to create: Profiles, Contribution pages, and, Request pages.

          This lead to our project being very CMS orientated. 
          </p>
          </div>
          <button className='bottom'><a href='https://github.com/nuclearsheep540/project-03' target='_blank' rel='noopener noreferrer'>Github</a></button>
          <button className='bottom'><a href='https://project-skill.herokuapp.com/' target='_blank' rel='noopener noreferrer'>Launch</a></button>
        </div>



        <div className='hidden proj-select' id='gigonamap'>
          <h3>GIG-ON-A-MAP</h3>
          <p>Technology: MERN Stack, REST API</p>
          <p>Build Time: 2 days</p>
          <div className="h400"> Gig-on-a-map is an app you can use to find gigs in your local area, with the convenience of displaying this data on an interactive map.

            <p>During this hackathon, I focussed on building the interactive Mapbox and the auto-generation of markers to represent data from Skiddle API, allowing a users to identify local gigs to their position for the current day and navigate around the map.</p>

          </div>
          <button className='bottom'><a href='https://github.com/nuclearsheep540/gigonamap' target='_blank' rel='noopener noreferrer'>Github</a></button>
          <button className='bottom'><a href='https://gigonamap.herokuapp.com/' target='_blank' rel='noopener noreferrer'>Launch</a></button>
        </div>



        <div className='hidden proj-select' id='deepsea'>
          <h3>DEEP SEA BATTLE: SHOTS FIRED!</h3>
          <p>Technology: JavaScript, HTML5, CSS3</p>
          <p>Build Time: 7 days</p>
          <div className="h400">My first ever JavaScript project was a cell-based JavaScript game. I built my own breif to combine concepts from battleships as well as minesweeper.

            <p>My goal was to build a game full of logic, condition checks, procedurally generated objects, as well as a
          smooth user experience across the game. The problem I enjoyed solving the most on this project was creating loads of conditional functions to validate appropraite tiles for placing data in, and utilizing a multitide of arrays to store this data.</p>
          </div>
          <button className='bottom'><a href='https://github.com/nuclearsheep540/deepsea' target='_blank' rel='noopener noreferrer'>Github</a></button>
          <button className='bottom'><a href='https://nuclearsheep540.github.io/deepsea/' target='_blank' rel='noopener noreferrer'>Launch</a></button>
        </div>

      </div>
    </div >


  )
}
export default Projects