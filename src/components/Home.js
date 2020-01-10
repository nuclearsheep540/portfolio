import React from 'react'
import axios from 'axios'

import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import ContactForm from './common/ContactForm'


export default class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      aboutVis: 'hidden',
      aboutId: -1,
      scroll: 2,
      scrollx: 0,
      toggleForm: false,
      formStage: 0,
      form: { //data from the front end, collected from the form
        firstname: '',
        lastname: '',
        email: '',
        number: '',
        subject: '',
        message: ''
      },
      message: { //data required by the API to deliver an email
        to: 'matt.davey540@me.com',
        from: 'hello@jackalmedia.co.uk',
        subject: 'You\'ve recieved a message from your website',
        textBody: 'This message was sent using the SocketLabs Node.js library!',
        htmlBody: '',
        messageType: 'basic'
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggleForm = this.toggleForm.bind(this)
    this.search = this.search.bind(this)
    this.nextAboutId = this.nextAboutId.bind(this)
    this.backAboutId = this.backAboutId.bind(this)
    this.lastAboutId = this.lastAboutId.bind(this)
    this.firstAboutId = this.firstAboutId.bind(this)
    this.aboutMe = this.aboutMe.bind(this)

  }

  componentDidMount() {
    document.getElementsByTagName('form')[0].classList.add('stealth')
    document.getElementsByTagName('body')[0].style.backgroundColor = 'rgb(250,250,250)'
  }

  //carousel buttons
  nextAboutId() {
    this.setState({ aboutId: this.state.aboutId + 1 })
    console.log(this.state.aboutId)
  }
  backAboutId() {
    this.setState({ aboutId: this.state.aboutId - 1 })
    console.log(this.state.aboutId)
  }
  firstAboutId() {
    this.setState({ aboutId: -1 })
    console.log(this.state.aboutId)
  }
  lastAboutId() {
    this.setState({ aboutId: 5 })
    console.log(this.state.aboutId)
  }

  //hide or show carousel
  aboutMe() {
    this.setState({
      ...this.state,
      aboutVis: this.state.aboutVis === 'hidden' ? 'feature' : 'hidden'
    })
  }

  handleSubmit() {
    const obj = { //formatting for SocketLabs object
      to: 'matt.davey540@me.com', //client's email address
      from: this.state.form.email, //contact's email address
      subject: 'You\'ve recieved a message from your website',
      textBody: this.state.form.message,
      htmlBody: `
    <html>
    From: 
    ${this.state.form.firstname}<br />
    Email:
    ${this.state.form.email}<br />
    Message:<br />
    ${this.state.form.message.replace('\n\n', '<br /> <br />').replace('\n', '<br />')}<br />
    </html>
    `,
      messageType: 'basic'
    }
    axios.post('api/contact', obj)
      .then(
        setTimeout(() => {
          document.getElementById('formSent').classList.add('boot'),
            document.getElementById('formSent').classList.remove('hidden')
        }, 150)
      )
      .catch(err => console.log(err))
  }

  handleCC() {
    const sender = { // copy for contacter
      to: this.state.form.email, //contact's email address
      from: 'matt.davey540@me.com', //client's email address
      subject: 'Thanks for getting in touch',
      textBody: 'We\'re just letting you know we\'ve recieved your message',
      htmlBody: `
      <html>
      Thanks for getting in touch, ${this.state.form.firstname} <br />
      <br />
      If you're receiving this message, it's to confirm we've got your following message: <br>
  
      ${this.state.form.message.replace('\n\n', '<br /> <br />').replace('\n', '<br />')}<br />
      <br />
      We'll try and get back to you as soon as possible. <br />
      Thanks!
      </html>
      `,
      messageType: 'basic'
    }
    axios.post('api/contact', sender)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  handleChange({ target: { name, value } }) {
    const form = { ...this.state.form, [name]: value }
    this.setState({ form })
  }

  toggleForm(e) { // is the contact form open or not & resets
    e.preventDefault()
    this.setState({ toggleForm: !this.state.toggleForm })
    console.log('form state ', this.state.toggleForm)
    if (this.state.formStage === 0) {
      this.setState({ formStage: 1 })
      setTimeout(() => {
        document.getElementById('form1').focus()
        document.querySelector('a').style.color = '#E3F8FF'
        // document.querySelector('a').innerHTML = 'close [x]'
      }, 2300)
    } else {
      this.setState({
        ...this.state, formStage: 0, form: {
          firstname: '',
          lastname: '',
          email: '',
          number: '',
          subject: '',
          message: ''
        }
      })
      // setTimeout(() => {
      //   document.querySelector('a').style.color = '#E3F8FF'
      //   document.querySelector('a').innerHTML = <img src='../assets/burger.png'></img>
      // }, 1200)
      document.getElementById('formSent').classList.remove('boot')
      document.getElementById('emailErr').classList.add('hidden')
      document.getElementById('form1').disabled = false
      document.getElementById('form2').disabled = false
      document.getElementById('form3').disabled = false
    }
  }

  search() { //listen to enter keys to move onto each form id
    if (event.key === 'Enter') {
      const Stage = this.state.formStage
      this.setState({ formStage: Stage + 1 })
      console.log('form' + this.state.formStage)
      document.getElementById('form' + this.state.formStage).disabled = true
      setTimeout(() => {
        document.getElementById('form' + this.state.formStage).focus()
      }, 50)
    }
    if (event.key === 'Enter' && this.state.formStage === 3 && this.state.form.email.includes('@')) {
      this.handleSubmit(),
        this.handleCC()
    } else if (event.key === 'Enter' && this.state.formStage === 3 && !this.state.form.email.includes('@'))
      document.getElementById('emailErr').classList.remove('hidden')
  }

  render() {
    if (!this.state) return null

    return (
      // prevent on-page reload to initiate first time animation
      <div className={`${this.props.history.action === 'PUSH' ? 'animated fadeIn delay-1s' : ''}`}>

        {/* background elements */}
        <div className='limiter'>
          <div className='element'></div>
          <div className='back-2'></div>
        </div>

        {/* contact */}
        <nav>
          <a onClick={this.toggleForm} className={this.state.formStage > 0 ? 'hidden' : ''}><img src='../assets/burger.png'></img></a>

          <a onClick={this.toggleForm} className={this.state.formStage > 0 ? '' : 'hidden'}><img src='../assets/close.png'></img></a>
        </nav>
        <ContactForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          form={this.state.form}
          formStage={this.state.formStage}
          search={this.search}
        />

        {/* content */}
        <div className='master'>

          <section id='about1' className={this.state.aboutVis === 'hidden' ? 'master' : 'stealth'}>
            <h1>HELLO WORLD</h1>
            <h2>My name is Matt and I'm a developer</h2>
            <button onClick={this.aboutMe} className={this.state.aboutVis === 'hidden' ? '' : 'hidden'}>Learn More</button>
          </section>

          <About
            className={this.state.aboutVis}
            id={this.state.aboutId}
            nextId={this.nextAboutId}
            backId={this.backAboutId}
            firstId={this.firstAboutId}
            lastId={this.lastAboutId}
            aboutMe={this.aboutMe}
          />

          <section className={this.state.aboutVis === 'hidden' ? 'master' : 'hidden'}>
            <Projects
              className=''
            />
          </section>

          <section className={this.state.aboutVis === 'hidden' ? 'master' : 'hidden'}>
            <Skills
              className=''
            />
          </section>
        </div>
      </div>
    )
  }
}