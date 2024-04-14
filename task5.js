//Awaiting Parallel Calls
import axios from 'axios';

async function parallelCalls(urls) {
    try {
        const responses = await Promise.all(urls.map(url => fetchData(url)));
        console.log("Responses:", responses);
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
}

async function fetchData(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to fetch data from ${url}`);
    }
}

// Example usage:
const urls = ['https://jsonplaceholder.typicode.com/users/1', 'https://jsonplaceholder.typicode.com/users/2', 'https://jsonplaceholder.typicode.com/users/3'];
parallelCalls(urls);