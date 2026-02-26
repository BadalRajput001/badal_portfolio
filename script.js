// JavaScript functionality

// Function to display current date and time
function displayDateTime() {
    const currentDateTime = new Date();
    const formattedDateTime = currentDateTime.toISOString().replace('T', ' ').substring(0, 19);
    console.log(`Current Date and Time (UTC): ${formattedDateTime}`);
}

displayDateTime();