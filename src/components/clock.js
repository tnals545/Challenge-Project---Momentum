const clock = document.createElement("h2");
clock.id = "clock";

function GetClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
  document.body.appendChild(clock);
}

GetClock();
setInterval(GetClock, 1000);

export default GetClock;
