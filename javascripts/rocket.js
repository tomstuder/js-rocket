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


var launch = function () {
  document.getElementById('rocket').className = 'rocket launch';
}

var relaunch = function () {
  console.log('relaunch rocket')
}

var abortlaunch = function () {
  console.log('abort launch')
}