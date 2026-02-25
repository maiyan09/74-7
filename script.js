// Set your daily Iftar time (24-hour format)
let iftarHour = 18;   // 6 PM
let iftarMinute = 1;  // 6:05 PM

function updateCountdown() {
    let now = new Date();

    // Create today's Iftar time
    let iftarTime = new Date();
    iftarTime.setHours(iftarHour);
    iftarTime.setMinutes(iftarMinute);
    iftarTime.setSeconds(0);

    // If current time already passed Iftar,
    // set Iftar time for tomorrow
    if (now > iftarTime) {
        iftarTime.setDate(iftarTime.getDate() + 1);
    }

    // Calculate remaining time
    let distance = iftarTime - now;

    let hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((distance / (1000 * 60)) % 60);
    let seconds = Math.floor((distance / 1000) % 60);

    // Display
    document.getElementById("countdown").innerHTML =
        hours + "h : " + minutes + "m : " + seconds + "s ";
}

// Update every 1 second
setInterval(updateCountdown, 1000);

// Run once immediately
updateCountdown();
