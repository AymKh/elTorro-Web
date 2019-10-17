// getting the userTry from the text input
const userTry = document.getElementById("userTry") ;
const errorBox = document.getElementById("errorBox");



function check(){
    // making sure the user doesn't return an empty
    if (userTry.value ===  ""){
        errorBox.innerHTML = "Please type in your try";
        return false;
    }
}
