// Define the media query string for screen widths below a particular value (e.g., 768px)
const mediaQuery = window.matchMedia('(max-width: 768px)');

// Function to perform when the media query matches (screen width <= 768px)
function handleSmallScreen() {
    // Your code to be executed when the screen width is below 768px
    console.log('Screen width is 768px or less. Performing specific actions...');
    // Example: Toggle a class or execute specific functionality
}

// Function to handle when the media query does not match (screen width > 768px)
function handleLargeScreen() {
    // Your code to be executed when the screen width is above 768px
    console.log('Screen width is more than 768px. Performing default actions...');
    // Example: Reset styles or perform default functionality
}

// Initial check of the media query
if (mediaQuery.matches) {
    // Execute function for small screens
    handleSmallScreen();
} else {
    // Execute function for large screens
    handleLargeScreen();
}

// Add listener for changes in the media query (i.e., screen resize)
mediaQuery.addListener((mq) => {
    if (mq.matches) {
        // Execute function for small screens
        handleSmallScreen();
    } else {
        // Execute function for large screens
        handleLargeScreen();
    }
});
