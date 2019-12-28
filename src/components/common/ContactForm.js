import React from 'react'

const ContactForm = ({ search, formStage, handleSubmit, handleChange, form }) => {
  return (
    <form onSubmit={handleSubmit} className={`${formStage > 0 ? 'animated slideInDown fast' : 'animated slideOutUp'}`}>

      <label>booting up contact.exe ...</label><br></br>
      <div className={`${formStage > 0 ? 'animated slideInDown fast' : 'stealth'}`}>
        <label className={`${formStage > 0 ? 'boot' : 'stealth'}`}>~/contact/name: </label>
        <input
          id='form1'
          type='text'
          name='firstname'
          value={form.firstname}
          onChange={handleChange}
          onKeyDown={search}
        >
        </input>
      </div>

      <div className={`${formStage > 1 ? '' : 'stealth'}`}>
        <label>~/contact/email:</label>
        <input
          id='form2'
          type='text'
          name='email'
          value={form.email}
          onChange={handleChange}
          onKeyDown={search}
        >
        </input>
      </div>

      <div id='message' className={`${formStage > 2 ? '' : 'stealth'}`}>
        <label>~/contact/message:  </label>
        <textarea
          id='form3'
          type='text'
          name='message'
          value={form.message}
          onChange={handleChange}
          onKeyDown={search}
          maxLength={196}
        >
        </textarea>
      </div>

      <label className={`${formStage > 3 ? '' : 'stealth'}`}>contact.exe sending message...</label>
      <label className='hidden' id='formSent'> message successful</label>
      <br></br>
      <label className='hidden' id='emailErr'> message failed. please use valid email address</label>


    </form>
  )
}

export default ContactForm