
// getting the userTry from the text input
const userTry = document.getElementById("userTry");
const errorBox = document.getElementById("errorBox");
const display = document.getElementById('display');
const form = document.querySelector('form');

//userTry testing

    // user try has unique digits 
    function testUnique(){   
        let x = Number(userTry.value);
        
        let a, b, c, d;

        a = Math.floor(x / 1000);
        b = Math.floor((x %1000 ) /100);
        c = Math.floor((x %100) / 10);
        d = Math.floor( x % 10);

        
        let tryArray = [a, b, c, d]
        let uniquea = 0;
        let uniqueb = 0;
        let uniquec = 0;
        let uniqued = 0;
      
        // unique a digit
        for (let i =0; i<4; i++){
            if (tryArray[i] == a){
                uniquea += 1;
            }
        }
        
        // unique b digit
        for (let j =0; j<4; j++){
            if (tryArray[j] == b){
                uniqueb += 1;
            }
        }
        
        // unique c digit
        for (let k =0; k<4; k++){
            if (tryArray[k] == c){
                uniquec += 1;
            }
        }
        
        // unique d digit
        for (let l =0; l<4; l++){
            if (tryArray[l] == d){
                uniqued += 1;
            }
        }

        let uniqeSum = uniquea + uniqueb + uniquec + uniqued;
        return uniqeSum;
     	
    }

    // function that return number of Bs and Cs
    function numCB(){
        

        return 0;
    }

    // empty input returned else check if its uniqe
    function testEmpty()
    {
        if (userTry.value === ""){
            errorBox.innerHTML = "Type your guess !";   
            
        }else{
            if (testUnique() != 4){
                errorBox.innerHTML="Your try must be 4 unique digits!";                    
            }
        }
        
    }







    
    //  MAIN FUNCTION
    form.addEventListener('submit' , e =>{
        
        e.preventDefault();
        testEmpty();
        uniqueNumbers();
        

    });


// ----------------------------------------------------------------

// sTimer : a function that takes a truthy value to start, and an untruthy value to stop
const sTimer =(comm) => {
    if (comm) {
    
    let secs = 0;
    let mins = 0;

    startTimer = setInterval (() => {
        secs ++;
        formTimer = ("0" + mins).slice(-2) + " : " + ("0" + secs).slice(-2);;
        console.log( formTimer );
        if ( secs == 59 )
        { mins ++ ; secs = -1 }
    }, 1000 );
    } else {
    clearInterval(startTimer);
    }
}
