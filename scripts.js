//Check if elements are in viewport
window.addEventListener('load', function () {

  //Declare html sections to listen to
  const id4 = document.getElementById('4')
  let id4pos = id4.getBoundingClientRect()

  const id3 = document.getElementById('3')
  let id3pos = id3.getBoundingClientRect()

  const id2 = document.getElementById('2')
  let id2pos = id2.getBoundingClientRect()

  const id1 = document.getElementById('1')
  let id1pos = id1.getBoundingClientRect()

  //function to check if said sections are any distance from viewport.
  function isInViewport(elem, section, id) {
    if (elem.top >= -(window.innerHeight / 3 ) && elem.top <= (window.innerHeight / 1.5)) {
      console.log(section, ' is in viewport')
      id.classList.remove('stealth','fadeOut')
      id.classList.add('fadeIn','slow')
    } else {
      id.classList.remove('fadeIn','slow')
      id.classList.add('fadeOut')
      setTimeout(()=>{
        id.classList.add('stealth')
      },100)
    }
  }

  //function to update element's reference from the top, on scroll.
  //check if the new pos of elements are yet in viewport.
  window.addEventListener('scroll', function () {
    id1pos = id1.getBoundingClientRect()
    id2pos = id2.getBoundingClientRect()
    id3pos = id3.getBoundingClientRect()
    id4pos = id4.getBoundingClientRect()

    isInViewport(id1pos, 'section 1', id1)
    isInViewport(id2pos, 'section 2', id2)
    isInViewport(id3pos, 'section 3', id3)
    isInViewport(id4pos, 'section 4', id4)
  })
})