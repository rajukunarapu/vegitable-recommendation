// JavaScript for the loading spinner
document.onreadystatechange = function () {
    var spinner = document.getElementById('spinner');
    if (document.readyState !== 'complete') {
        spinner.style.display = 'block'; // Display spinner while page is loading
    } else {
        setTimeout(function () {
            spinner.style.display = 'none'; // Hide spinner when page is fully loaded
        }, 500); // Adjust time delay as needed
    }
};
