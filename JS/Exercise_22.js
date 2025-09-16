function delayMsg(msg)
{
    console.log(`This message will be printed after a delay: ${msg}`)
}

setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all') 

//a
4 > 3 > 2 > 1

//b //c //d

setTimeout( (msg) => console.log(`This message will be printed after a delay: ${msg}`), 601, "message that gets print");

const delayMsg_1 = (msg) => console.log(`This message will be printed after a delay: ${msg}`);
const delayMsg_2 = setTimeout(delayMsg_1, 601, "message");

clearTimeout(delayMsg_2);

// //setTimeout allows us to delay execution of a function by a defined interval of time. It returns a unique reference to this timerso that it can be cancelled.
// let timerId = setTimeout(func|code, [delay], [arg1], [arg2], . . .)

// //const myFunction = () => {
//   console.log("Hello!");
// };

//result is undefined because if we don't passing a third parameter to the function