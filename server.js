const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const express = require('express');
const app = express();

// Endpoint to receive log data from frontend
app.post('/backend/log', (req, res) => {
  const logData = req.body;

  // Send log data to Discord webhook
  fetch('https://discord.com/api/webhooks/1211413211195375716/YMypAayCmXxFRIMIkbzc6twV-HoCwI2MdQN2kNeyYZTx4TkYe8Z8a0iNaSGPqyWS-xsZ', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ content: JSON.stringify(logData) })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to send log data to Discord webhook');
    }
    res.sendStatus(200);
  })
  .catch(error => {
    console.error(error);
    res.sendStatus(500);
  });
});

app.listen(3000, () => {
  console.log('Backend server is running on port 3000');
});
