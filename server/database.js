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
    .query(`SELECT * FROM orders WHERE user_id = $1`, [2])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
}
exports.getOrderByUser = getOrderByUser;

// ADD ITEM TO THE CART

// const addItemToOrder =  function(db, { user_id, item_id }) {
//   const values = [user_id, item_id]
//   return db
//   .query(`SELECT * FROM items WHERE id = $1`, [item_id])
//   .then((result) => {

//     if (result.rows.length) {
//       throw new Error('Item is in the cart')
//     }
//     return db.query(`INSERT INTO orders (orders.user_id, orders.item_id) VALUES ($1, $2) RETURNING *`, values);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });
// }
