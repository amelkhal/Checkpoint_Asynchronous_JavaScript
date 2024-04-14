//Chaining Async/Await
async function chainedAsyncFunctions() {
    await firstAsyncFunction();
    await secondAsyncFunction();
    await thirdAsyncFunction();
}

async function firstAsyncFunction() {
    await new Promise(resolve => setTimeout(() => {
        console.log("First function executed");
        resolve();
    }, 1000));
}

async function secondAsyncFunction() {
    await new Promise(resolve => setTimeout(() => {
        console.log("Second function executed");
        resolve();
    }, 1000));
}

async function thirdAsyncFunction() {
    await new Promise(resolve => setTimeout(() => {
        console.log("Third function executed");
        resolve();
    }, 1000));
}

// Example usage:
chainedAsyncFunctions();