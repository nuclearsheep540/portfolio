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
    document.getElementsByTagName('form')[0].classList.add('stealth')
    document.getElementsByTagName('body')[0].style.backgroundColor = '#E3F8FF'
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
        document.getElementById('formSent').classList.add('boot')
      )
      .catch(err => console.log(err))
  }

  handleChange({ target: { name, value } }) {
    const form = { ...this.state.form, [name]: value }
    this.setState({ form })
  }

  toggleForm(e) { // is the contact form open or not & resets
    e.preventDefault()
    this.setState({ toggleForm: !this.state.toggleForm })
    console.log('form state ',this.state.toggleForm)
    if (this.state.formStage === 0) {
      this.setState({ formStage: 1 })
      setTimeout(() => { 
        document.getElementById('form1').focus()
      },2300)
    } else {
      this.setState({ ...this.state, formStage: 0, form: {
        firstname: '',
        lastname: '',
        email: '',
        number: '',
        subject: '',
        message: ''
      }
      })
      document.getElementById('formSent').classList.remove('boot')
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
      },50)
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
          className=''
        />

        <Skills
          className=''
        />

        <Projects
          className=''
        />

      </main>

    )
  }
}