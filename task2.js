//Awaiting a Call
import axios from 'axios';

async function awaitCall() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(response.data);
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
}

// Example usage:
awaitCall();