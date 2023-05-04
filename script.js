
function greeting(name) {
    if (name.charAt(0) === "J" || name.charAt(0) === "j") {
      return "Goodbye";
    } else {
      return "Hello";
    }
  }
  
 
  function getName(name) {
    var message = greeting(name) + " " + name;
    return message;
  }

  function logGreetings(names) {
    for (var i = 0; i < names.length; i++) {
      var message = getName(names[i]);
      console.log(message);
    }
  }
  

  function logGreeting() {
    var nameInput = document.getElementById("nameInput");
    var name = nameInput.value;
    var names = [name];
    logGreetings(names);
  }
  