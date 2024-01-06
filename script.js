document.addEventListener("DOMContentLoaded", function() {
    // Fetch and update hostname
    document.getElementById("hostname").textContent = window.location.hostname;

    // Fetch and update IP address
    fetch('https://api64.ipify.org?format=json')
        .then(response => response.json())
        .then(data => document.getElementById("ip").textContent = data.ip)
        .catch(error => console.error('Error fetching IP address:', error));

    // Update date and time
    setInterval(function() {
        const now = new Date();
        document.getElementById("datetime").textContent = now.toLocaleString();
    }, 1000); // Update every second

    // Fetch and update browser info
    document.getElementById("browser").textContent = navigator.userAgent;

    // Add more system information
    document.getElementById("os").textContent = navigator.platform;
    document.getElementById("resolution").textContent = `${window.screen.width}x${window.screen.height}`;
    document.getElementById("language").textContent = navigator.language;
});
