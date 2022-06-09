/*
 * All routes for Widgets are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();
const databaseQueries = require("../server/database");
const sms = require("../server/sms");
const session = require("express-session");

router.use(session({ secret: "keyboard cat", cookie: { maxAge: 60000 } }));

// MAIN PAGE ROUTE WHICH LOADS MENU ITEMS //

module.exports = (db) => {
  router.get("/", (req, res) => {
    databaseQueries
      .getAllItems(db)
      .then((data) => {
        const foodItems = data;
        res.json(foodItems);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // router.get("/checkout", (req, res) => {
  //   databaseQueries.getOrderByUser(db)
  //     .then(data => {
  //       const orderItems = data;
  //       res.json({ orderItems });
  //     })
  //     .catch(err => {
  //       res
  //       .status(500)
  //       .json({ error: err.message });
  //     });
  // });

  // ROUTE FOR ORDER ITEMS TO BE SENT VIA SMS //

  router.post("/order", (req, res) => {
    let cart = req.body;
    const user_id = req.session.user_id;

    databaseQueries.saveCart(db, cart, user_id).then((result) => {
      databaseQueries.getCookTimeByOrderId(db).then((data) => {
        const cooktime = data;
        // return sms.sendSMS('+17783208267', `Hi there! Your order will be ready in ${cooktime} minutes!`)
      });
      databaseQueries.getOrderToRestaurant(db, user_id).then((data) => {
        const orderForRestaurant = data;
        let array = [];
        for (let item of orderForRestaurant) {
          array.push(item.name);
          array.push(item.quantity);
        }
        databaseQueries.getOrderTime(db, user_id).then((data) => {
          res.send(data);
        });
        //return sms.sendSMS('+17783208267', `We got new order! ${array} for client #${user_id}`)
      });
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
