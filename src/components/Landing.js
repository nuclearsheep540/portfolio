import React from 'react'
// import ReactPlayer from 'react-player'
import VideoCover from 'react-video-cover'

export default class Landing extends React.Component {
  constructor() {
    super()
    this.state = {
      scroll: 0,
      nav: false
    }
    this.nav = this.nav.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      this.setState({ scroll: scrollX })
      if (this.state.scroll >= 1) {
        this.nav()
      }
    })
  }

  nav() {
    this.setState({ nav: true })
    setTimeout(() => {
      this.props.history.push('/home')
    }, 500)
  }

  render() {
    const videoOptions = {
      src: '../../assets/hero_vid_clean_best.mp4',
      autoPlay: true,
      loop: true,
      muted: true
    }
    return (
      <div className={`${this.state.nav === true ? 'animated slideOutLeft faster hero-vid' : 'animated hero-vid'}`}>
        <VideoCover
          id='hero-vid'
          videoOptions={videoOptions}
        />
        <div className='hero'>
          <div className='middle-center logo'>
            <h1>Matt</h1>
            <h1>Davey</h1>
            <h3>Full Stack Developer</h3>
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
    )
  }


}
