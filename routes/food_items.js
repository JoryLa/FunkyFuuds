/*
 * All routes for Widgets are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const databaseQueries = require('../server/database');

module.exports = (db) => {
  router.get("/", (req, res) => {
    console.log('req.session.user_id', req.session.user_id);
    databaseQueries.getAllItems(db)
      .then(data => {
        const foodItems = data;
        res.json({ foodItems });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/checkout", (req, res) => {
    databaseQueries.getOrderByUser(db)
      .then(data => {
        const orderItems = data;
        res.json({ orderItems });
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
