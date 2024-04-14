//Awaiting Concurrent Requests
import axios from 'axios';

async function concurrentRequests() {
    try {
        const [result1, result2] = await Promise.all([fetchDataFromAPI1(), fetchDataFromAPI2()]);
        console.log("Results from API 1:", result1.data);
        console.log("Results from API 2:", result2.data);
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
}

async function fetchDataFromAPI1() {
    return axios.get('https://jsonplaceholder.typicode.com/users/1');
}

async function fetchDataFromAPI2() {
    return axios.get('https://jsonplaceholder.typicode.com/users/2');
}

// Example usage:
concurrentRequests();