function printMe() {
    console.log('printing debounced message')
}

printMe = debounce(printMe); //create this debounce function for a)

//fire off 3 calls to printMe within 300ms - only the LAST one should print, after
1000ms of no calls
setTimeout( printMe, 100); 
setTimeout( printMe, 200); 
setTimeout( printMe, 300);  

//a


//Debouncing is removing unwanted input noise from buttons, switches or other user input. 
// Debouncing prevents extra activations or slow functions from triggering too often. 
// // Debouncing is used in hardware switches, programs and websites.
// In programming, debouncing is when a function filters user input before triggering the action. 
// Improperly debounced user input can cause bad performance, double activations or user frustration. 
// Often, a general debouncing function is used instead of writing new code for each input activity. 
// The debouncing function sits after the user input and then calls the target action of the button. 