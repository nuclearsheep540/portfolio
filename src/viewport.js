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
  function isInViewport(elem, navView, id) {
    if (elem.top < (window.innerHeight / 1.15)
    ) {
      id.classList.remove('stealth','fadeOut')
      id.classList.add('fadeIn','slow')
      document.querySelector(`${navView}`).classList.add('navView','heartbeat')
    } else if (elem.bottom > (window.innerHeight / 1.0)){
      id.classList.remove('fadeIn','slow')
      id.classList.add('fadeOut')
      document.querySelector(`${navView}`).classList.remove('navView','heartbeat') 
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
    // console.log('id4:','bottom',id1pos.bottom,'|','top',id1pos.top,'window = ',window.innerHeight)

    isInViewport(id1pos, '.navView1', id1)
    isInViewport(id2pos, '.navView2', id2)
    isInViewport(id3pos, '.navView3', id3)
    isInViewport(id4pos, '.navView4', id4)
  })
})