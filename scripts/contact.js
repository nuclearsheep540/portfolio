(function () {

  // stringify all input, select, and textaeas in a form

  function toJSONString(form) {
    var obj = {}
    // grab all of the inputs, selects, textareas in a specified form
    var elements = form.querySelectorAll('input, select, textarea')
    for (var i = 0; i < elements.length; ++i) {
      var element = elements[i]
      var name = element.name
      var value = element.value

      if (name) {
        obj[name] = value
      }
    }
    // return JSON stringified


    obj.to = 'matt.davey540@me.com',
    obj.from = obj.email,
    obj.subject = 'You\'ve recieved a message from your website',
    obj.textBody = 'This message was sent using the SocketLabs Node.js library!',
    obj.htmlBody = obj.message
    obj.messageType = 'basic'


    
    var sendData = JSON.stringify({
      serverId: '30696',
      APIKey: 'n6G7MrTw5f2X3Ajp9QLi',
      Messages: [
        {
          To: [
            {
              emailAddress: 'matt.davey540@me.com'
            }
          ],
          From: {
            emailAddress: obj.email
          },
          ReplyTo: {
            emailAddress: 'matt.davey540@me.com'
          },
          Subject: 'You\'ve received a message from your website',
          TextBody: 'This message was sent using the SocketLabs Node.js library!',
          HtmlBody: obj.message,
          CC: [
            {
              emailAddress: obj.email
            }
          ]
        }
      ]
    })

    return sendData
  }

  document.addEventListener('DOMContentLoaded', function () {
    // targets the form
    const form = document.getElementById('form-contact')

    // submit event listener
    form.addEventListener('submit', function (e) {
      e.preventDefault()

      //json object = the data inside the form which calls this function
      const json = toJSONString(this)

      // this is how form data looks like when you send it with the attributes `action="POST"` on your form
      const formData = json

      var xhr = new XMLHttpRequest()
      xhr.withCredentials = true

      xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
          console.log(this.responseText)
        }
      })

      xhr.open('POST', 'https://inject.socketlabs.com/api/v1/email')
      xhr.setRequestHeader('content-type', 'application/json')

      xhr.send(formData)

      // change form on submit
      form.innerHTML = '<div class="middle-center"> Message sent! </div>'
    })
  })
})()