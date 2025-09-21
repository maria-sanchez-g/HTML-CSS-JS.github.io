// run 'npm init' and accept all the defaults
// run 'npm install node-fetch'
// run 'npm pkg set type=module'

import fetch from 'node-fetch'
globalThis.fetch = fetch

function fetchURLData(url) {
    let fetchPromise = fetch(url).then(response => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error(`Request failed with status ${response.status}`);
        }
    });

    return fetchPromise;
}
 
fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => console.log(data))
    .catch(error => console.error(error.message)); 

//a
async function fetchURLData_1 () {
    try {
        const fetchURLData_2 = async function ()
{
    
}

    } catch (error)
}


// Fetch is a browser-based function that sends HTTP requests to retrieve data from other servers. Since this type of operation
// is asynchronous, it returns a promise we can use to process the results once it completes.
// Structure:
// fetch(url)
// .then(response => response.json()) // convert response to JSON
// .then(data => console.log(data))   // use the data
// .catch(error => console.error(error));


// async and await can be used to force promises to behave synchronously - ie to wait until the promise resolves before executing the rest of the code body. 
// They replace the .then() and .catch() syntax of asynchronously processed promises.
// async: Marks a function as asynchronous — it will always return a Promise.
// await: Pauses the execution of the async function until the Promise is resolved (or rejected).
//Structure:
// async function functionName() {
//   try {
//     const result1 = await someAsyncFunction();
//     const result2 = await anotherAsyncFunction(result1);
//     console.log("Result:", result2);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// async function → Declares the function as asynchronous (it always returns a Promise).
// await keyword → Pauses execution until the Promise is resolved/rejected, then returns the resolved value.
// try { ... } catch { ... } → Recommended for error handling (like .catch() with Promises).
