// 1. Define the function that accepts a URL and a 'callback' function
function fetch(url, successCallback, errorCallback) {
    
    // Create the XHR object (The engine of the request)
    var xhr = new XMLHttpRequest();

    // Open the connection

    xhr.open('GET', url, true);

    // Set up the event listener 
    xhr.onreadystatechange = function() {
        

        if (xhr.readyState === 4) {
            

            if (xhr.status === 200) {
                // Parse the text response into a JSON object
                var data = JSON.parse(xhr.responseText);
                
                // Execute the success callback with the data
                successCallback(data);
                
            } else {
                // Handle errors 
                if (errorCallback) {
                    errorCallback("Error: " + xhr.status);
                }
            }
        }
    };

    xhr.send();
}

// --- USAGE ---

console.log("1. Request starting...");


fetch(
    'https://jsonplaceholder.typicode.com/todos/1',
    
    // The Success Callback 
    function(data) {
        console.log("2. Data received!");
        console.log("Title:", data.title);
        console.log("Full Object:", data);
    },
    
    // The Error Callback 
    function(errorMessage) {
        console.error(errorMessage);
    }
);

console.log("3. This line runs before the data arrives (Non-blocking)");