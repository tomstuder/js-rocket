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

// ROCKET LAUNCHER JS

var timer = null;
var countdownNumber = 10;

var changeState = function (state) {
  document.body.className = 'body-state'+state;
  clearInterval(timer);
  countdownNumber = 10;
  document.getElementById('countdown').innerHTML = countdownNumber;

  // countdown
  if (state == 2) {
    timer = setInterval(function () {
      countdownNumber = countdownNumber-1;
      document.getElementById('countdown').innerHTML = countdownNumber;
      
      if (countdownNumber <= 0) {
        changeState(3);
      };

    }, 500);
  } else if (state == 3) {
    var success = setTimeout(function () {
        var randomNumber = Math.round(Math.random()*10);

        console.log('randomNumber:', randomNumber)

        // successful launch
        if (randomNumber > 4) {
          changeState(4);

        } else {
          changeState(5); // Boom!
        }
    }, 2000);
  };
}