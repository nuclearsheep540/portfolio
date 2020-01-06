import React from 'react'
import VideoCover from 'react-video-cover'

export default class Landing extends React.Component {
  constructor() {
    super()
    this.state = {
      scroll: 0,
      nav: false,
      videoOptions: {

      }
    }
    this.nav = this.nav.bind(this)
  }

  componentDidMount() { 
    window.addEventListener('scroll', () => { // listen for scrolling for nav func
      this.setState({ scroll: scrollX })
      if (this.state.scroll > 20) {
        this.nav()
      }
    })

    setTimeout(() => { //set video after xxxx ms
      const videoOptions = {
        src: '../../assets/hero_vid_clean_best.mp4',
        autoPlay: true,
        loop: true,
        muted: true
      }
      
      // overlay 40% alpha on video
      document.querySelector('.hero').style.backgroundColor = 'rgba(0, 0, 0, 0.6)'

      // set video options to update background with video
      this.setState( { videoOptions } )

      setTimeout(()=> { // remove the initial transition after its occoured
        document.querySelector('.hero').style.transition = '0s' 
      }, 500)
    }, 500)
  } // end of mount

  nav() { // scroll true ? nav to home
    this.setState({ nav: true })
    setTimeout(() => {
      this.props.history.push('/home')
    }, 500)
  }

  render() {
  
    return (
      <div className='scrollable'>
        <div className={`${this.state.nav === true ? 'animated slideOutLeft faster hero-vid' : 'animated hero-vid'}`}>
          <VideoCover
            className={this.state.videoOptions.autoPlay ? 'animated fadeIn slower' : ''}
            id='hero-vid'
            videoOptions={this.state.videoOptions}
          />
          <div className='hero'>
            <div className='logo'>
              <img src='../../assets/md_logo.png' id='logo'></img>
              <h3 id='sub'>FULL STACK DEVELOPER</h3>
            </div>
            <div className="center-con">
              <div className="round" onClick={this.nav}>
                <div id="cta">
                  <span className="arrow primera next "></span>
                  <span className="arrow segunda next "></span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }


}
