// run 'npm init' and accept all the defaults
// run 'npm install node-fetch'
// run 'npm pkg set type=module'

// import fetch from 'node-fetch'
// globalThis.fetch = fetch

// function fetchURLData(url) {
//     let fetchPromise = fetch(url).then(response => {
//         if (response.status === 200) {
//             return response.json();
//         } else {
//             throw new Error(`Request failed with status ${response.status}`);
//         }
//     });

//     return fetchPromise;
// }
 
// fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
//     .then(data => console.log(data))
//     .catch(error => console.error(error.message)); 

//a
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