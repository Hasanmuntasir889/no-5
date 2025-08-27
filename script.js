let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

// ❤️ Add heart
function addHeart() {
  heartCount++;
  document.getElementById("heartCount").innerText = heartCount;
}

// 📋 Copy number
function copyNumber(num) {
  // Copy to clipboard
  navigator.clipboard.writeText(num).then(() => {
    // 1️⃣ Show alert
    alert("Hotline number " + num + " copied to clipboard!");
    
    // 2️⃣ Increase counter
    copyCount++;
    document.getElementById("copyCount").innerText = copyCount;
  }).catch(err => {
    console.error("Failed to copy: ", err);
  });
}

// 📞 Make a call
function makeCall(service, number) {
  if (coinCount < 20) {
    alert("Not enough coins to make a call!");
    return;
  }

  alert("Calling " + service + " at " + number);
  coinCount -= 20;
  document.getElementById("coinCount").innerText = coinCount;

  let time = new Date().toLocaleTimeString();
  let li = document.createElement("li");
  li.textContent = `${service} - ${number} at ${time}`;
  document.getElementById("historyList").appendChild(li);
}

// 🗑️ Clear history
function clearHistory() {
  document.getElementById("historyList").innerHTML = "";
}
