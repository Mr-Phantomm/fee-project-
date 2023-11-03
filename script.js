// Set the date of your special event
const eventDate = new Date("2023-12-31T00:00:00").getTime();

function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeRemaining = eventDate - currentDate;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("days-number").textContent = days.toString().padStart(2, "0");
    document.getElementById("hours-number").textContent = hours.toString().padStart(2, "0");
    document.getElementById("minutes-number").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("seconds-number").textContent = seconds.toString().padStart(2, "0");

    if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "The event has started!";
    }
}

updateCountdown(); // Initial call to display the countdown
const countdownInterval = setInterval(updateCountdown, 1000);
