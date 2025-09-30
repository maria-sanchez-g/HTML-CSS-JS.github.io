// run 'npm init' and accept all the defaults
// run 'npm install node-fetch'
// run 'npm pkg set type=module'

// import fetch from 'node-fetch'
// globalThis.fetch = fetch

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

//a //b
import fetch from 'node-fetch'
globalThis.fetch = fetch
//In Node.js, fetch is not always available globally, so we import it using node-fetch and attach it to globalThis.fetch.
//After this line, we can use fetch just like in the browser.

async function fetchURLDataAsync(url) { //The async keyword makes this function asynchronous and ensures it always returns a Promise. Inside, we can use await to pause execution until a Promise resolves.
    try {
        const response = await fetch(url); //fetch(url) sends a request to the given URL and returns a Promise. await pauses until the Promise resolves and assigns the result (a Response object) to response.

        if (response.status === 200) { //response.status contains the HTTP status code (200 means "OK").
            const data = await response.json(); //.json() returns another Promise because parsing can take time. await waits for parsing to finish, then stores the result (parsed JavaScript object) in data.
            return data; //Returning from an async function resolves the Promise with this value.
        } else {
            throw new Error(`Request failed with status ${response.status}`);
        }

    } catch (error) { //The try...catch block captures:Network errors, JSON parsing errors
    throw error;
    }
}
async function run() { //Assync wraper function, that run the function and log the result
    try {
        const data = await fetchURLDataAsync('https://jsonplaceholder.typicode.com/todos/1');
        console.log(data); // log successful response
    } catch (error) {
        console.error(error.message); // handle error
  }
}
run();
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
// await keyword → Pauses execution until the Promise is resolved/rejected, then returns the resolved value. Must be used inside an async function
// try { ... } catch { ... } → Recommended for error handling (like .catch() with Promises).

//c
import fetch from 'node-fetch';
globalThis.fetch = fetch;

async function fetchURLDataAsync(url) {
  try {
    const response = await fetch(url);

    if (response.status === 200) {
      return await response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }

  } catch (error) {
    throw error;
  }
}

//Use Promise.all to fetch multiple URLs in parallel
async function run() {
  try {
    const urls = [ //create an array of URL
      'https://jsonplaceholder.typicode.com/todos/1',
      'https://jsonplaceholder.typicode.com/todos/2',
      'https://jsonplaceholder.typicode.com/todos/3'
    ];

    // Map URLs to promises
    const promises = urls.map(url => fetchURLDataAsync(url));

    // Wait until all are resolved (or until one fails)
    const results = await Promise.all(promises);

    console.log('All results:', results);
  } catch (error) {
    console.error('One of the requests failed:', error.message); //If any one of the Promises rejects, Promise.all rejects immediately, and the catch block handles it.
  }
}

run();

//Promise.all(promises): accepts an iterable of promises, waits for all promises to resolve and returns an array of theresults.
// If any of the given promises rejects, it becomes the error of Promise.all, and all other results are ignored.