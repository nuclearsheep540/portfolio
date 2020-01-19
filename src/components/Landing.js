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

    const videoOptions = {
      src: '../../assets/hero_vid_clean_best.mp4',
      autoPlay: true,
      loop: true,
      muted: true
    }
    setTimeout(() => {
      this.setState({ videoOptions })
    }, 1800)

    setTimeout(() => { //set video after xxxx ms      
      // overlay 40% alpha on video
      document.querySelector('.hero').style.backgroundColor = 'rgba(0, 0, 0, 0.6)'
    }, 1700)

    setTimeout(() => { // remove the initial transition after its occoured
      document.querySelector('.hero').style.transition = '0s'
    }, 1750)

  } // end of mount

  nav() { // scroll true ? nav to home
    this.setState({ nav: true })
    setTimeout(() => {
      this.props.history.push('/home')
    }, 500)
  }

  render() {

    return (
      <div className='scroll'>
        <div className={`${this.state.nav === true ? 'animated slideOutLeft faster hero-vid' : 'animated fadeIn hero-vid'}`}>
          <div className={`${this.state.nav === true ? 'animated slideOutLeft faster hero-vid' : 'animated fadeIn slow delay-1s hero-vid'}`}>
            <VideoCover
              id='hero-vid'
              videoOptions={this.state.videoOptions}
            />
          </div>
          <div className='hero'>
            <div className='logo'>
              <img src='../../assets/md_logo.png' id='logo'></img>
              <h3 id='sub'>FULL STACK DEVELOPER</h3>

              <div className="">
                <div className="round" onClick={this.nav}>
                  <div id="cta">
                    {/* <span className="arrow primera next "></span> */}
                    {/* <span className="arrow segunda next "></span> */}
                    <img id='swipe' src='https://www.transperfect.com/images/scroll2.gif'></img>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }


}
