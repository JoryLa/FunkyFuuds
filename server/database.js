
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

const saveCart =  function(db, cart, user_id) {
  const beginningOfQuery = `INSERT INTO orders (user_id, item_id, quantity) VALUES `
  let endQuery = '';
  for (const line in cart) {
    const item_id = line;
    const quantity = cart[line];
    //const lineItem = {user_id, item_id, quantity}
    const values = [user_id , item_id, quantity];
    const newItem = `(${user_id}, ${item_id}, ${quantity}),`;
    //console.log('newItem:', newItem);
    endQuery += newItem;
  // return db.query(`INSERT INTO orders (user_id, item_id, quantity) VALUES
  // ($1, $2, $3),
  // ($1, $2, $3)`, values)

  }
  endQuery = endQuery.substring(0, endQuery.length -1);
  const finalQuery = beginningOfQuery + endQuery;
  //console.log('finalQuery', finalQuery);
  return db.query(finalQuery);
  //return 'heloooooo';
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


const getCookTimeByOrderId = (db) => {
  return db
  .query('SELECT SUM(orders.quantity * items.cooking_time) FROM orders JOIN items ON orders.item_id = items.id;')
    .then((result) => {
      console.log("inside the function declaration, result", result.rows[0].sum);
      return result.rows[0].sum;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

exports.getCookTimeByOrderId = getCookTimeByOrderId;

const getOrderToRestaurant = (db, user_id) => {
  return db
  .query(`SELECT items.item AS name, orders.quantity AS quantity
  FROM orders JOIN items ON orders.item_id = items.id JOIN users ON users.id = orders.user_id
  WHERE user_id = $1 GROUP BY items.item, orders.quantity;`, [user_id])
    .then((result) => {
      //console.log("result.rows inside 2nd func", result);
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

exports.getOrderToRestaurant = getOrderToRestaurant;
