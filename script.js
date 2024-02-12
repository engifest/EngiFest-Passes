document.querySelector(".btn").addEventListener('click', function () {
    // Show loading div
    document.getElementById('text-1').style.display = 'block';

    // Hide all other divs
    hideAll();

    // Set timeout to simulate loading
    setTimeout(function () {
        // Hide loading div
        document.getElementById('text-1').style.display = 'none';

        // Show loaded div
        document.getElementById('text-2').style.display = 'block';

        // Display other divs in sequence
        displayDivsInSequence();
    }, 2000); // Change 2000 to the desired time interval in milliseconds (e.g., 3000 for 3 seconds)
});

// Function to hide all divs
function hideAll() {
    var divs = document.querySelectorAll('.cont-2');
    divs.forEach(function (div) {
        div.style.display = 'none';
    });
}

// Function to display divs in sequence
function displayDivsInSequence() {
    var divs = ['text-3', 'text-4', 'text-5', 'text-6', 'text-7', 'text-8'];
    var currentIndex = 0;

    var interval = setInterval(function () {
        hideAll();
        document.getElementById(divs[currentIndex]).style.display = 'block';
        currentIndex++;
        if (currentIndex === divs.length) {
            clearInterval(interval); // Stop the interval once all divs are displayed
        }
    }, 8000); // Interval set to 5 seconds (5000 milliseconds)
}