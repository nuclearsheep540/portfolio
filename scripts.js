window.addEventListener('load', function () {
  //Element reading for viewport specific rendering
  const id4 = document.getElementById('4')
  const id4pos = id4.getBoundingClientRect()
  console.log('id4 = ', id4pos)

  const id3 = document.getElementById('3')
  const id3pos = id3.getBoundingClientRect()
  console.log('id3 = ', id3pos)

  const id2 = document.getElementById('2')
  const id2pos = id2.getBoundingClientRect()
  console.log('id2 = ', id2pos)

  const id1 = document.getElementById('1')
  const id1pos = id1.getBoundingClientRect()
  console.log('id1 = ', id1pos)

  if (id4pos.top >= -100 || id4pos.top <= 50
    // id4pos.left >= 0 &&
    // id4pos.right <= (window.innerWidth || document.documentElement.clientWidth) &&
    // id4pos.bottom >= (window.innerHeight || document.documentElement.clientHeight)
  ) {
    console.log('id 4 is inside the viewport')
  } else {
    console.log('id 4 is hidden')
  }


  // function isInViewport(elem) {
  //   const bounding = elem.getBoundingClientRect()
  //   return (
  //     bounding.top >= 0 &&
  //     bounding.left >= 0 &&
  //     bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  //     bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  //   )
  // }
  // while (scroll) {
  //   isInViewport(id1)
  // }

})