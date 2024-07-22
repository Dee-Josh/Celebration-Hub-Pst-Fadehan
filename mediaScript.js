// Define the media query string for screen widths below a particular value (e.g., 768px)
const mediaQuery = window.matchMedia('(max-width: 800px)');

// DOM IMPLEMENTATION

const mobileSideNav = document.querySelector(".hdr-2");
const initialContent = mobileSideNav.innerHTML;

// Function to perform when the media query matches (screen width <= 768px)
function handleSmallScreen() {
    mobileSideNav.innerHTML+=`
        <hr>
        <div class="added-list">
            <a href ="./index.html#about"><li class="link-1 active">ABOUT</li></a>
            <a href ="./index.html#wishes"><li class="link-2">WISHES</li></a>
            <a href ="./gallery.html"><li class="link-3">GALLERY</li></a>
        </div>
    `;
}

// Function to handle when the media query does not match (screen width > 768px)
function handleLargeScreen() {
    mobileSideNav.innerHTML = initialContent;
}

// Initial check of the media query
if (mediaQuery.matches) {
    handleSmallScreen();
} else {
    handleLargeScreen();
}

// Add listener for changes in the media query (i.e., screen resize)
mediaQuery.addListener((mq) => {
    if (mq.matches) {
        handleSmallScreen();
    } else {
        handleLargeScreen();
    }
});
