 // Log a greeting to the console
 function logGreeting() {
    var nameInput = document.getElementById("nameInput");
    var name = nameInput.value;
    var message = getName(name);
    console.log(message);
  }