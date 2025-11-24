
var screen = document.createElement("div");
screen.id = "screen";
screen.innerHTML = "0";
screen.style.fontWeight = "bold";

var calc = document.createElement("div");
calc.className = "calculator";

var grid = document.createElement("div");
grid.className = "buttons";

//buttons
var allButtons = ['C','7','8','9','÷','4','5','6','1','×','2','3','0','-','=','+'];

for(var i = 0; i < allButtons.length; i++) {
  var btn = document.createElement("button");
  btn.innerHTML = allButtons[i];
  
  if(allButtons[i] == "C") {
    btn.className = "clear";
  }
  else if(allButtons[i] == "0") {
    btn.className = "zero";
  }
  else if(allButtons[i] == "=") {
    btn.className = "equal";
  }
  else if(allButtons[i] == "+" || allButtons[i] == "-" || allButtons[i] == "×" || allButtons[i] == "÷") {
    btn.style.backgroundColor = "Ochre";
  }
  else {
    btn.style.backgroundColor = "#525252";
  }
  
  grid.appendChild(btn);
}

calc.appendChild(screen);
calc.appendChild(grid);
document.body.appendChild(calc);



var firstNumber = "";
var secondNumber = "";
var operation = "";
var nextNumber = false;

grid.addEventListener("click", function(event) {
  if(event.target.tagName == "BUTTON") {
    var clicked = event.target.innerHTML;
    
    //number
    if(clicked >= "0" && clicked <= "9") {
      if(nextNumber == true) {
        screen.innerHTML = clicked;
        nextNumber = false;
      } else {
        if(screen.innerHTML == "0" || screen.innerHTML == "LOL NO") {
          screen.innerHTML = clicked;
        } else {
          screen.innerHTML = screen.innerHTML + clicked;
        }
      }
    }
    
    //clear
    else if(clicked == "C") {
      screen.innerHTML = "0";
      firstNumber = "";
      secondNumber = "";
      operation = "";
      nextNumber = false;
    }
    
    //operation
    else if(clicked == "+" || clicked == "-" || clicked == "×" || clicked == "÷") {
      firstNumber = screen.innerHTML;
      operation = clicked;
      nextNumber = true;
    }
    
    //equal
    else if(clicked == "=") {
      secondNumber = screen.innerHTML;
      
      var a = parseFloat(firstNumber);
      var b = parseFloat(secondNumber);
      var answer = 0;
      
      if(operation == "+") {
        answer = a + b;
      }
      else if(operation == "-") {
        answer = a - b;
      }
      else if(operation == "×") {
        answer = a * b;
      }
      else if(operation == "÷") {
        if(b == 0) {
          screen.innerHTML = "LOL NO";
          return;
        }
        answer = a / b;
      }
      
      screen.innerHTML = answer;
      firstNumber = "";
      operation = "";
    }
  }
});