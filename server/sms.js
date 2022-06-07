const accountSid = 'ACaba4da5e64dd74c28b925c77b6467b25';
const authToken = '71893bf6da812222b3662db4799a8b28';
const client = require('twilio')(accountSid, authToken);
//const updateCart = require('./app');
//alert(cookTime);
//Customer
client.messages
  .create({
     body: `Your order will be ready in 10 minutes`,
     from: '+19282235684',
     to: '+12502632448', 
   })
  .then(message => console.log(message.sid));

//Restaurant
  client.messages
  .create({
     body: 'You got new order: CONTENT',
     from: '+19282235684',
     to: '+17783208267', 
   })
  .then(message => console.log(message.sid));