const accountSid = '';
const authToken = '';
const client = require('twilio')(accountSid, authToken);


const sendSMS = (to, body) => {
  return client.messages
    .create({ to, body, from: '+19282235684'})
    .then(message => console.log(message.sid));
}

module.exports = {sendSMS};
