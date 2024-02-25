// Function to toggle the modal display
function toggleModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = modal.style.display === "block" ? "none" : "block";
  if (modal.style.display === "block") {
    viewLog(); // Call viewLog() when modal is displayed
  }
}

// Function to view the log
function viewLog() {
  var log = localStorage.getItem('costLog');
  var logDiv = document.getElementById('log');

  if (log) {
    logDiv.innerHTML = ""; // Clear previous log entries
    var logEntries = log.split("\n");
    logEntries.forEach(function(entry, index) {
      if (entry !== "") {
        var logEntryDiv = document.createElement("div");
        var copyButton = document.createElement("button");
        var copyIcon = document.createElement("i");
        copyIcon.className = "fas fa-copy";
        copyButton.className = "copy-button";
        copyButton.appendChild(copyIcon);
        copyButton.onclick = function() {
          copyToClipboard(entry);
        };
        if (index === 0) {
          copyButton.style.visibility = "hidden"; // Hide copy button for "Cost Price Log:"
        }
        logEntryDiv.textContent = entry;
        logEntryDiv.appendChild(copyButton);
        logDiv.appendChild(logEntryDiv);
      }
    });
  } else {
    logDiv.innerText = "Log is empty!";
  }
}

// Function to copy the log entry to clipboard
function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

function copyWholeLog() {
  var logContent = document.getElementById("log").innerText;
  copyToClipboard(logContent);
}

// Function to log the cost price
function logCostPrice(costPrice, finalPrice, customerType) {
  var log = localStorage.getItem('costLog');
  if (!log) {
    log = "Cost Price Log:\n";
  }
  var additionalInfo = '';
  switch (customerType) {
    case 'REGULAR':
      additionalInfo = '';
      break;
    case 'EMERGENCY':
      additionalInfo = ' (EMERGENCY SERVICES)';
      break;
    case 'MECHANIC':
      additionalInfo = ' (MECHANIC)';
      break;
    case 'SUPERVISOR':
      additionalInfo = ' (SUPERVISOR)';
      break;
    default:
      additionalInfo = '';
      break;
  }
  log += "> **CP:** $" + costPrice + " | **SP:** $" + finalPrice + additionalInfo + "\n";
  localStorage.setItem('costLog', log);
  sendToWebhook("> **CP:** $" + costPrice + " | **SP:** $" + finalPrice + additionalInfo + "\n")
}

// Function to reset the log
function resetLog() {
  localStorage.removeItem('costLog');
  document.getElementById('log').innerHTML = "Log has been reset!";
}

// Function to handle button selection
function selectOption(button) {
  calculatePrice(button.id.toUpperCase());
}

// Function to calculate the price based on the selected option
function calculatePrice(service) {
  var costPrice = parseFloat(document.getElementById("costPrice").value);
  var customerType;

  // Determine customer type based on service
  switch (service) {
    case 'REGULAR':
      customerType = 'REGULAR';
      price = costPrice * 1.4;
      break;
    case 'EMERGENCY':
      customerType = 'EMERGENCY';
      price = costPrice * 1.15;
      break;
    case 'MECHANIC':
      customerType = 'MECHANIC'; // Assuming both EMERGENCY and MECHANIC are treated as EMERGENCY SERVICES
      price = costPrice * 1.15;
      break;
    case 'SUPERVISOR':
      customerType = 'SUPERVISOR';
      price = costPrice * 1.12;
      break;
    default:
      customerType = 'REGULAR'; // Default to regular customer type
      price = costPrice;
      break;
  }

  var finalPriceSpan = document.getElementById("finalPrice");
  var finalPrice = Math.round(price);
  finalPriceSpan.textContent = finalPrice;

  // Call logCostPrice with customerType parameter
  logCostPrice(costPrice, finalPrice, customerType);
}

// Function to copy the final price to clipboard
function copyFinalPrice() {
  var copyButton = document.getElementById("copyButton");

  copyButton.style.backgroundColor = "#cfe8d5";

  var finalPriceSpan = document.getElementById("finalPrice");
  var range = document.createRange();
  range.selectNode(finalPriceSpan);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();

  setTimeout(function() {
    copyButton.style.backgroundColor = "#FF3A2C";
  }, 2000);
}

// Function to initiate the Discord authorization process
function authorizeDiscord() {
  const clientId = "1211412613330772038";
  const redirectUri = "https://ldnrisingsuns.000webhostapp.com";
  const scope = "identify"; // or any other required scopes separated by spaces

  const discordAuthUrl = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=${encodeURIComponent(scope)}`;

  window.location.href = discordAuthUrl;
}

// Function to send log data to backend endpoint
function sendLogToBackend(logData) {
  fetch('/backend/log', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`, // Include access token in headers
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(logData)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to send log data to backend');
    }
    // Log data sent successfully
  })
  .catch(error => console.error(error));
}

function sendToWebhook(message) {
  const webhookUrl = "https://discord.com/api/webhooks/1211413211195375716/YMypAayCmXxFRIMIkbzc6twV-HoCwI2MdQN2kNeyYZTx4TkYe8Z8a0iNaSGPqyWS-xsZ";

  const payload = {
    content: message
  };

  fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to send message to webhook");
    }
    console.log("Message sent to webhook successfully");
  })
  .catch(error => {
    console.error("Error sending message to webhook:", error);
  });
}

document.getElementById("viewLogButton").addEventListener("click", function() {
  toggleModal('logModal');
});

