function updateclock(){
    const now = new Date();
    let hours = now.getHours();
    hours = hours % 12 || 12;
    const meridians = hours >= 12 ? "PM" : "AM";
    hours = hours.toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridians}`;
    document.getElementById("clock").textContent = timeString;
}

updateclock();
setInterval(updateclock,1000);