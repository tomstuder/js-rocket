// rocket.js

var boom = function () {
  // change class name
  var currentClassName = document.getElementById('normal').className;

  if (currentClassName == 'awesome') {
       document.getElementById('normal').className = 'awesome boom'; 
  } else {
       document.getElementById('normal').className = 'awesome';
  }
}

// ROCKET LAUNCH PAGE --------------------------------------------

var timer = null;
var countdownNumber = 10;

var changeState = function (state) {
  document.body.className = 'body-state'+state;
  clearInterval(timer);
  countdownNumber = 10;
  document.getElementById('countdown').innerHTML = countdownNumber;

//   // countdown
//   if (state == 2) {
//     timer = setInterval(function () {
//       countdownNumber = countdownNumber-1;
//       document.getElementById('timer').innerHTML = countdownNumber;

//       if (countdownNumber <= 0) {
//         changeState(3);
//       };
//     }, 500);
//   } else if (state == 3) {
//     var success = setTimeout(function () {
//         var randomNumber = Math.round(Math.random()*10);

//         console.log('randomNumber:', randomNumber)

//         // succes
//         if (randomNumber > 2) {
//           changeState(4);

//         } else {
//           changeState(5); // BOOOOOM!
//         }
//     }, 2000);
//   };
// }



// Launch Rocket
var launch = function () {
  document.getElementById('rocket').className = 'rocket launch';
}

// Reset the Rocket Launch
var relaunch = function () {
  console.log('relaunch rocket')
}

// Stop the Rocket Launch
var abortlaunch = function () {
  console.log('abort launch')
}