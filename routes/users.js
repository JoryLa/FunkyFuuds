/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};


// CREATE: adding the item to the cart
// READ: the home page with the list of all the menu items
// EDIT: modify the contents of the cart
// DELETE: delete item from the checkout page





//BROWSE//GET /funkyfuuds
//READ////GET /funkyfuuds/:id(/checkout)
//EDIT//POST(PATCH) /funkyfuuds/:id(/checkout)
//ADD/////POST /funkyfuuds
//DELETE//POST /funkyfuuds/:id(/checkout)
