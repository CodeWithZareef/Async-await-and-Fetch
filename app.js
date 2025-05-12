// mabdullahjs
// async-await ka use karke asynchronous code ko synchronous code ke tarha darsha pate hai

// asynchronous function

// asyn function hamesha ek promise return kr raha hota hai
async function getData() {
    setTimeout(function () {
        console.log("I am inside set Timeout block");
    }, 3000);
}

// getData();

let output = getData();

console.log(output);

// async-await ka use me tabhe karu ga jab mujhe promises ko handle karna ho
// (clean code, easy to debug)

// fetch API (Application Programming Interface)

async function gData() {

    // get request - async (hoti hai)
    let response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1');
    // parse json - async hota hai
    let data = await response.json();

    console.log(data);
    console.log(data[0]);
    for(let key in data[0]) {
        console.log(key + ": " + data[0][key]);
    }
}

gData();

// scenario:
// prepare url / api endpoint -> sync
// await // fetch data -> network call -> async (here stop flow of execution)
// process data -> sync (print data)


const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const url = "https://jsonplaceholder.typicode.com/posts";

const options = {
    method: "POST",
    body: JSON.stringify({ username: "Love Babbar" }),
    headers: myHeaders,
}

async function g1Data() {
    const url = "https://dummyjson.com/posts";
    const response = await fetch(url);
    let data = await response.json();
    console.log("Get data response: ", data);
}

// fetch(url, optionsObject) for post data

async function postData() {
    const response = await fetch(url, options);
    let data = await response.json();
    console.log("Post data response: ", data);
}

async function processData() {
    await postData();
    await g1Data();
}

processData();



// apikey

// Example Domains
// dummyjson

// fetch('https://dummyjson.com/posts/add', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       title: 'I am in love with someone.',
//       userId: 5,
//       /* other post data */
//     })
//   })

