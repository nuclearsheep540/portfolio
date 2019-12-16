import React from 'react'

const ContactForm = ({ handleSubmit, handleChange, form }) => {
  return (
    <form onSubmit={handleSubmit} className=''>

      <div>
        <label name="name" type='text'>Name</label>
        <input
          id='name'
          placeholder='First Name'
          type='text'
          name='firstname'
          value={form.firstname}
          onChange={handleChange}
        >
        </input>

        <input
          id='name'
          placeholder='Last Name'
          type='text'
          name='lastname'
          value={form.lastname}
          onChange={handleChange}
        >
        </input>
      </div>



      <div className=''>
        <label name="email" type='text'>Email Address</label>
        <input
          id='email'
          className=''
          placeholder='Your email address'
          type='email'
          name='email'
          value={form.email}
          onChange={handleChange}
        >
        </input>
      </div>

      <div className=''>
        <label name="message" type='text'>Message</label>
        <textarea
          className=''
          placeholder='Your message'
          type='textarea'
          name='message'
          value={form.message}
          onChange={handleChange}
        >
        </textarea>
      </div>

      <button type='submit' className=''>Submit</button>

    </form>
  )
}

export default ContactForm