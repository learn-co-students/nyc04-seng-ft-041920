/*
  on clicking *any* <p> tag,
  change the font of that <p> tag to comic sans

  1. find the element we care about handling events on
  2. add an event listener with the event type and callback
  3. in the callback, tell js we want to happen

  Hints:
  - find a way to get access to ALL the <p> tags on the page
  - set the inline style's fontFamily property: "Comic Sans MS", cursive
*/

// grab all the p tags using querySelectorAll
// <p>
// <div id="p">
const allPs = document.querySelectorAll("p")

// loop through to get access to each one
allPs.forEach(function (oneP) {

  // add an event listener to each one of them
  oneP.addEventListener("click", function (event) {

    // do some DOM manpulation -> change the font
    event.target.style.fontFamily = '"Comic Sans MS", cursive'
    event.target.style.fontSize = '50px'
  })

  // oneP.onclick = function(event) {
  //   // whatever we want to happen when click event occurs
  // }
  // oneP.onclick = function(event) {
  //   // whatever we want to happen when click event occurs
  // }

})
