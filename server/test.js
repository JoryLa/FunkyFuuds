// const sms = require('./sms');

const { saveCart } = require("./database");

// sms.sendSMS('+17783208267', 'hello!')
//   .then(() => {
//     console.log('sent');
//   })
//   .catch(err => {
//     console.log(err.message);
//   })

saveCart();