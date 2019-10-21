
// getting DOM selectors
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

    
    // function that returns an string with a random number
    function numRandom(){
        let numbers=[0,1,2,3,4,5,6,7,8,9]; // array containing possible ints to be chosen by pc
        let random = []; // random number generated byt the computer

        let a,b,c,d;

        // unique random b
        a = Math.floor(Math.random()* 10);
        random[0] = numbers[a];
        for (let i = a ; i < 10; ++i)
		{
			numbers[i] = numbers[i+1];
        }

        // unique random b
        b = Math.floor(Math.random()* 9);
        random[1] = numbers[b];
        for (let j = b ; j < 10; ++j)
		{
			numbers[j] = numbers[j+1];
        }

        // unique random c
        c= Math.floor(Math.random()* 8);
        random[2] = numbers[c];
        for (let k = c ; k < 10; ++k)
		{
			numbers[k] = numbers[k+1];
        }

        // unique random d
        d= Math.floor(Math.random()* 7);
        random[3] = numbers[d];
        for (let l = d ; l < 10; ++l)
		{
			numbers[l] = numbers[l+1];
		}

        
        return random;
    }

    // function that return number of Bs and Cs
    function numCB(random){
        
        let testCows = 0; 
        let testBulls = 0;

        // console.log(userTry.value[0],random)
        for (let i=0; i<4 ; i++)
        {
            for (let j=0; j < 4 ; j++)
             {   
                 if (userTry.value[i] == random[j])
                {     
                    if( i == j )
                    {
                        testBulls ++;
                    } else {
                        testCows ++;
                    }
                }
            }
        }

        console.log(' Cows '+testCows+' Bulls '+testBulls)
        
    }

    // empty input returned else check if its unique
    function testEmpty()
    {
        if (userTry.value === ""){
            errorBox.innerHTML = "Type your guess !";   
            
        }else{
            if (testUnique() != 4){
                errorBox.innerHTML="Your try must be 4 unique digits!";                    
                return true;
            }
        }
    }







    
    //  MAIN FUNCTION
    let randMain = numRandom();
    form.addEventListener('submit' , e =>{
        
        e.preventDefault();
        
        if (testEmpty()) 
        {
            numCB(randMain);
        }
        
        
        

    });


// ----------------------------------------------------------------

// sTimer : a function that takes a "truthy value" to Start, and an "untruthy value" to Stop
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
