function GetClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const clock = document.querySelector("h2#clock");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

GetClock();
setInterval(GetClock, 1000);

export default GetClock;
