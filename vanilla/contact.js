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
    return JSON.stringify(obj)
  }

  document.addEventListener('DOMContentLoaded', function () {
    // targets a specific form
    var form = document.getElementById('form-contact')

    // REMOVE - this is used only for the test
    var output = document.getElementById('output')

    // submit event listener
    form.addEventListener('submit', function (e) {
      e.preventDefault()
      var json = toJSONString(this)

      // REMOVE - this is used only for testing
      output.innerHTML = json

      // get new XHR object
      var newXHR = new XMLHttpRequest()

      // go to https://hookb.in/ZdNN6D0A to view request!
      newXHR.open('POST', 'https://hookb.in/ZB7WNJPa')
      //            ^-- IMPORTANT: to send data to the server with it appearing in the url use 'POST'

      // set the header
      // this lets the server know where/how to expect your data
      newXHR.setRequestHeader('Content-Type', 'application/json')

      // this is how form data looks like when you send it with the attributes `action="POST"` on your form
      var formData = json

      // REMOVE - this is used only for testing
      console.log(formData)

      //
      newXHR.onreadystatechange = function () {
        if (newXHR.readyState === XMLHttpRequest.DONE) {
          if (newXHR.status === 200) {
            document.getElementById('myDiv').innerHTML = newXHR.responseText
          } else if (newXHR.status === 400) {
            alert('There was an error 400')
          } else {
            alert('something else other than 200 was returned', newXHR.status)
            document.getElementById('myDiv').innerHTML = 'Our system encountered and error. Your message has not been sent.'
          }
        }
      }

      // sends form data
      newXHR.send(formData)
    },
    false
    )
  })

})()

