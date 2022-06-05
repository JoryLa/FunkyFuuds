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

const addItemToOrder =  function(db, {user_id, item_id}) {
  const values = [user_id, item_id];
  return db
  .query(`INSERT INTO orders (orders.user_id, orders.item_id) VALUES ($1, $2) RETURNING *`, [values]);
};

exports.addItemToOrder = addItemToOrder;
