// This calculator is intended to only be able to calculate two numbers (so far, at least). The var currentNumber is
// supposed to indicate whether num1 or num2 is active (so, initially currentNumber will be equal to 1, to match
// with num1. Once an operator is pressed, then currentNumber equals 2, meaning that you can now insert your second
// number)

// var click makes sure that there arent too many digits on the screen
// when the value of click is greater than 8, as in, if there are more than eight digits on the screen, then 
// "return" makes the function stop. you will no longer be able to add digits on the screen
var currentNumber = 1;
var num1 = null;
var num2 = null;
var click = 0;

var $screen = $("#screen");
var $number = $(".number");

// when someone clicks on a number
// it saves the number to do the math
$number.on('click', function() {
    click++;
    if (click > 8){
        return;
    }
    var numberPressed = $(this).html();
    $screen.append(numberPressed);

    if (currentNumber == 1) {
        if (num1 == null) {
            num1 = numberPressed;
        } else {
            num1 = num1 + numberPressed;
            console.log(num1);
        }
    }
    
    if (currentNumber == 2) {
        if (num2 == null) {
            num2 = numberPressed;
        } else {
            num2 = num2 + numberPressed;
            console.log(num2);
        }
    }
});



// this function is called every time an operator is pressed.
// if there are already two numbers, the screen is emptied and only the
// answer (which is now num1) is there.
function more(){
    if (click > 8) {
        click = click - 5;
    }
    if (currentNumber == 2) {
        findAnswer();
        $screen.empty();
        $screen.append(num1);
        
    }
    currentNumber = 2;
}



function findAnswer() {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    console.log(num1, op, num2);
    if (op == "+") {
        answer = num1 + num2;
    }
    if (op == "-") {
        answer = num1 - num2;
    }
    if (op == "*") {
        answer = num1 * num2;
    }
    if (op == "/") {
        answer = num1 / num2;
    }
    num1 = answer;
    num2 = null;
    currentNumber = 1;
}

/* Code for the operators (and clear)*/
// Note: currentNumber++ is the short version of currentNumber = currentNumber + 1  
// Which would be the equivalent of if (currentNumber == 1) { currentNumber = 2 }  

$("#clear").on('click', function ()
    {
        $screen.empty();
        num1 = null;
        num2 = null;
        currentNumber = 1;
        click = 0;
    });

$("#plus").on('click', function ()
    {
        if(num1 != null) {
        more();
        $screen.append(" + ");
        op = "+";
    };
    return;
    })

$("#minus").on('click', function ()
    {
        if(num1 != null) {
        more();
        $screen.append(" - ");
        op = "-";
    };
    return;
    })

$("#times").on('click', function ()
    {
        if(num1 != null) {
        more();
        $screen.append(" x ");
        op = "*";
    };
    return;
    })

$("#over").on('click', function ()
    {
        if(num1 != null) {
        more();
        $screen.append(" / ");
        op = "/";
    };
    return;
    })

$("#equal").on('click', function ()
    {
        if(num2 != null) {
        $screen.append(" = ");
        findAnswer();
        console.log(answer);
        a = answer;
        answer = a.toFixed(1);
        console.log(answer);
        if (click > 0){
          $screen.empty();
          var answerLength = answer.toString();
          click = answerLength.length;
        }
          $screen.append(answer);
        };
        return;
    })


/*      OLD CODE FOR THE LIST OF NUMBERS AND EQUAL FUNCTION, EXCLUDING CLEAR
 

document.getElementById("num1").onclick = function write1 ()
    {
        $screen.append(1);
    }

document.getElementById("num2").onclick = function write2 ()
    {
        $screen.append(2);
    }

document.getElementById("num3").onclick = function write3 ()
    {
        $screen.append(3);
    }

document.getElementById("num4").onclick = function write4 ()
    {
        $screen.append(4);
    }

document.getElementById("num5").onclick = function write5 ()
    {
        $screen.append(5);
    }

document.getElementById("num6").onclick = function write6 ()
    {
        $screen.append(6);
    }

document.getElementById("num7").onclick = function write7 ()
    {
        $screen.append(7);
    }

document.getElementById("num8").onclick = function write8 ()
    {
        $screen.append(8);
    }

document.getElementById("num9").onclick = function write9 ()
    {
        $screen.append(9);
    }

document.getElementById("num0").onclick = function write0 ()
    {
        $screen.append(0);
    }

document.getElementById("equal").onclick = function writeEqual ()
    {
        $screen.append("=");
    }


*/
 
/* SLIGHTLY OLDER CALCULATOR CODE


    if (currentNumber == 1) { 

        if (num1 == null) {
        num1 = numberPressed;
    }
    else {
        num1 = num1 + numberPressed;
    }

    } 
    else if (num2 == 11) {
        num2 = numberPressed;
    }
});


*/