let time = document.getElementById("timezone");

function updateTime() {
  let d = new Date();
  time.innerHTML = d.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit"
  });
}

updateTime()

setInterval(updateTime, 1000)