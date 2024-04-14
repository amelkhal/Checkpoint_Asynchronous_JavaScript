//Handling Errors with Async/Await (Modified awaitCall function)
async function awaitCall() {
    try {
        const response = await fetchDataFromAPI();
        console.log(response);
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
}

async function fetchDataFromAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Failed to fetch data"));
        }, 2000);
    });
}

// Example usage:
awaitCall();
