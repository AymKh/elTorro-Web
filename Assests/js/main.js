
// Timer function
// Display in-game feedback
// User interface
// Scorebord 

// getting the userTry from the text input
const userTry = document.getElementById("userTry") ;
const errorBox = document.getElementById("errorBox");
const testForm = document.querySelector("#form1");


// form checker
testForm.addEventListener('submit' , e =>{
    e.preventDefault();
    // making sure the user doesn't return an empty
    if (userTry.value ===  "")
    {
        errorBox.innerHTML = "Please type in your try";
    }
    // making sure the user doesn't type a wrong letter
})


let secs = 0;
let mins = 0;

setInterval (() => {
    secs ++;
    formTimer = ("0" + mins).slice(-2) + " : " + ("0" + secs).slice(-2);;
    console.log( formTimer );
    if ( secs == 59 )
    { mins ++ ; secs = -1 }
}, 1000 );