const accountSid = 'ACaba4da5e64dd74c28b925c77b6467b25';
const authToken = '91fe56358a766e4e64eafc28390f0ab6';
const client = require('twilio')(accountSid, authToken);


const sendSMS = (to, body) => {
  return client.messages
    .create({ to, body, from: '+19282235684'})
    .then(message => console.log(message.sid));
}

module.exports = {sendSMS};
