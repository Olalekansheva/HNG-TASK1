function updateTimeAndDay() {
    const currentTimeUTC = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });

    document.getElementById('current-time').textContent = currentTimeUTC;
    document.getElementById('current-day').textContent = currentDay;
}

window.onload = function() {
    updateTimeAndDay();
    setInterval(updateTimeAndDay, 1000); // Update every second
}
