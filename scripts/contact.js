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

    // submit event listener
    form.addEventListener('submit', function (e) {
      e.preventDefault()
      var json = toJSONString(this)

      // get new XHR object
      var xhr = new XMLHttpRequest()

      // go to https://hookb.in/ZdNN6D0A to view request!
      xhr.open('POST', 'https://hookb.in/RZnOewZR7eTnpQLg9rRo')
      //            ^-- IMPORTANT: to send data to the server with it appearing in the url use 'POST'

      // set the header
      // this lets the server know where/how to expect your data
      xhr.setRequestHeader('Content-Type', 'application/json')
      xhr.setRequestHeader('X-Requested-With','XMLHttpRequest')

      // this is how form data looks like when you send it with the attributes `action="POST"` on your form
      var formData = json

      // REMOVE - this is used only for testing
      console.log(formData)

      //
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          console.log('done')
        }
        // sends form data
      },
      xhr.send(formData)
      // form.reset()
      form.innerHTML = '<div class="middle-center"> Message sent! </div>'
    })
  })
})()