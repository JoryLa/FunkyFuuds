
// GET ALL ITEMS IN A MENU

const getAllItems = (db) => {
  return db
    .query(`SELECT * FROM items;`)
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

exports.getAllItems = getAllItems;

// Get all items for a single user.

const getOrderByUser = function(db, user_id) {
  return db
    .query(`SELECT * FROM orders WHERE user_id = $1`, [user_id])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
}
exports.getOrderByUser = getOrderByUser;

// ADD ITEM TO THE CART

const saveCart =  function(db, {user_id, item_id, quantity}) {
  const values = [user_id , item_id, quantity];
  return db
  .query(`INSERT INTO orders (user_id, item_id, quantity) VALUES 
  ($1, $2, $3)`, values)
  
//   .then((result) => {
//     return result.rows;
//   })
//   .then(data => {
//     //const orderItems = data;
//     return sms.sendSMS('+17783208267', 'hello!')
//   })
//   .then((res) => {
//     console.log(res);
//     res.json({});
//   })
};

exports.saveCart = saveCart;
