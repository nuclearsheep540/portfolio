// //function to check if said sections are any distance from viewport.
// function isInViewport(elem, navView, id) {
//   if (elem.top < (180)
//   ) {
//     id.classList.remove('stealth', 'fadeOut')
//     id.classList.add('fadeIn', 'slow')
//     document.querySelector(`${navView}`).classList.add('navView', 'heartbeat')
//   } else if (elem.bottom > (window.innerHeight / 1.0)) {
//     id.classList.remove('fadeIn', 'slow')
//     id.classList.add('fadeOut')
//     document.querySelector(`${navView}`).classList.remove('navView', 'heartbeat')
//     setTimeout(() => {
//       id.classList.add('stealth')
//     }, 100)
//   }
// }
// //Check if elements are in viewport
// window.addEventListener('scroll', function () {
//   //Declare html sections to listen to
//   const id4 = document.getElementById('a4')
//   let id4pos = id4.getBoundingClientRect()

//   const id3 = document.getElementById('a3')
//   let id3pos = id3.getBoundingClientRect()

//   const id2 = document.getElementById('a2')
//   let id2pos = id2.getBoundingClientRect()

//   const id1 = document.getElementById('a1')
//   let id1pos = id1.getBoundingClientRect()
  
//   //function to update element's reference from the top, on scroll.
//   window.addEventListener('scroll', function () {
//     id1pos = id1.getBoundingClientRect()
//     id2pos = id2.getBoundingClientRect()
//     id3pos = id3.getBoundingClientRect()
//     id4pos = id4.getBoundingClientRect()

//     isInViewport(id1pos, '.navView1', id1)
//     isInViewport(id2pos, '.navView2', id2)
//     isInViewport(id3pos, '.navView3', id3)
//     isInViewport(id4pos, '.navView4', id4)
//   })
// })