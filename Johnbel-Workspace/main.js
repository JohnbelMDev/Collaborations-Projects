function makeCards() {
   //set two empty lists
    var a = [];
    var t = [];
    // Populate the terms and answers from the input fields
    var elements = document.querySelectorAll('input'); //select all the <input> elements from the html
    console.log('elements: '+ elements);
    for (var i = 0; i < elements.length; i++) { //loop through the input elements object to get the input values
      var check = elements[i].value; //get the value of the inputs
      if (i % 2 == 0) {
        t.push(check); //push terms into list
      }
      else {
        a.push(check); //push answers into list
      }
    }
    console.log('terms first page' +a);
    console.log('answers first page' +t);
    localStorage.setItem("question",JSON.stringify(t)); //store (TERMS) in the local storage to pass to the flashcard.HTML
    localStorage.setItem("answers",JSON.stringify(a)); //store (ANSWERS)
  }
  var counter = 1;
  var dynamicInput = [];

  function addInput(){
      var newdiv = document.createElement('div');
      newdiv.id = dynamicInput[counter];
      newdiv.innerHTML = "Entry " + (counter + 1) + " <br><input type='text' name='myInputs[]'> <input type='button' value='-' onClick='removeInput("+dynamicInput[counter]+");'>";
      document.getElementById('formulario').appendChild(newdiv);
      counter++;
  }

    function removeInput(id){
      var elem = document.getElementById(id);
      return elem.parentNode.removeChild(elem);
    }
