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


// Launch Rocket
var launch = function () {
  document.getElementById('rocket').className = 'rocket launch';
  document.getElementById('test').style.display = 'block';
  document.getElementById('test').style.backgroundColor = 'red';
}

// Reset the Rocket Launch
var relaunch = function () {
  console.log('relaunch rocket')
}

// Stop the Rocket Launch
var abortlaunch = function () {
  console.log('abort launch')
}