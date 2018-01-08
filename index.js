document.addEventListener("DOMContentLoaded", function() {
  console.log("Content is loaded");


  var myButton = document.getElementById("myButton");

  //-----------------EVENT LISTENER - WAY2 -----------------
  myButton.addEventListener('click', handleClick);
  function handleClick() {
    console.log("Button was clicked via function");
  }

  var myForm = document.getElementById('myForm');
  myForm.addEventListener('submit', function(event) {
    console.log('Form was submitted');
    event.preventDefault();
  })

  var buttons = document.querySelectorAll('.myButtons');
  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    button.addEventListener('click', function(event) {
      console.log(this.value + ' was clicked');
    })
  }

  //----------------EVENT LISTENER - WAY1 -------------------
  // first param('click') - type of action
  // second param(function()) - what will happen (callback)
  myButton.addEventListener('click', function() {
    console.log("button was clicked");
  })

  //----------------WHEN EVENT LISTENER > 1 --------------
  // ---- each button relates to a different function (handleClick)---
  myButton.addEventListener('click', handleClick);
  myButton1.addEventListener('click', handleClick1);
  myButton11.addEventListener('click', handleClick11);
  myButton111.addEventListener('click', handleClick111);

})
