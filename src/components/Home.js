import React from 'react'
import axios from 'axios'


import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import ContactForm from './common/ContactForm'
import Navbar from './common/Navbar'



export default class Home extends React.Component {
  constructor() {
    super()
    this.state = {
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
  }


  componentDidMount() {
    document.getElementsByTagName('body')[0].style.backgroundColor = '#E3F8FF'

  }

  handleSubmit() {
    //formatting for SocketLabs object
    const obj = {
      to: 'matt.davey540@me.com', //client's email address
      from: this.state.form.email, //dummy email address
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
    //post message
    axios.post('api/contact', obj)
      .then(
        document.getElementById('formSent').classList.add('boot')
      )
      .catch(err => console.log(err))
  }

  handleChange({ target: { name, value } }) {
    const form = { ...this.state.form, [name]: value }
    this.setState({ form })

    // //testing for multi-line messages
    // var text = this.state.form.message
    // var match = /\r|\n/.exec(text)
    // if (match) {
    //   console.log('whitepsace!')
    // }
    // console.log(this.state.form.message)

  }

  toggleForm(e) {
    e.preventDefault()
    this.setState({ toggleForm: !this.state.toggleForm })
    console.log(this.state.toggleForm)
    if (this.state.formStage === 0) {
      this.setState({ formStage: 1 })
    } else {
      this.setState({ formStage: 0 })
    }
  }

  search() {
    if (event.key === 'Enter') {
      const Stage = this.state.formStage
      this.setState({ formStage: Stage + 1 })
      console.log('form' + this.state.formStage)
      document.getElementById('form' + this.state.formStage).disabled = true
    }
    if (event.key === 'Enter' && this.state.formStage === 3) {
      this.handleSubmit()
    }
  }

  render() {
    if (!this.state) return null
    console.log('form stage ', this.state.formStage)
    return (

      <main className={`${this.props.history.action === 'PUSH' ? 'animated fadeInRight' : ''}`}>
        <ContactForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          form={this.state.form}
          formStage={this.state.formStage}
          search={this.search}

        />
        <nav>
          <Navbar />
          <a onClick={this.toggleForm}>Contact</a>
        </nav>


        <About
          className='flex-wrapper middle-center animated hidden'
        />

        <Skills
          className='flex-wrapper middle-center animated hidden'
        />

        <Projects
          className='flex-wrapper middle-center animated hidden'
        />

      </main>

    )
  }
}