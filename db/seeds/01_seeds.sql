-- Users table seeds here (Example)
INSERT INTO users (name, phone_number, email) VALUES
  ('FunkyFuuds', '7783208267', 'funkyfuuds@yahoo.com'),
  ('Bob', '7783208267', 'bobby@yahoo.com'),
  ('Doug', '7967576489', 'duggy@yahoo.com'),
  ('Bulldog', '4035677893', 'ruff@yahoo.com'),
  ('Porky', '7789808765', 'oink@yahoo.com'),
  ('Fish', '6045831234', 'fish@yahoo.com');


INSERT INTO items (item, description, price, cooking_time, thumbnail_photo) VALUES
  ('Funky Burger', 'Your favourite burger but funkier', 2000, 20, 'http://img'),
  ('Paralizing pizza', 'Don\t test it', 3000, 15, 'http://img'),
  ('Stuffed animal', '????', 'duggy@yahoo.com'),
  ('Pickled fish in a bucket', 'Straight from the docks and into the brine', 4000, 3, 'http://img' ),
  ('Pork?', 'Your guess is as good as ours', 300, 10, 'http://img'),
  ('Seared burrito', 'Unexpected consequences', 600, 15, 'http://img');

  INSERT INTO orders (user_id, order_time) VALUES
  (2, TIMESTAMP),
  (3, TIMESTAMP),
  (3, TIMESTAMP),
  (4, TIMESTAMP),
  (5, TIMESTAMP),
  (6, TIMESTAMP);

  INSERT INTO order_items (order_id, item_id, quantity) VALUES
  ( 1, '7783208267', 'funkyfuuds@yahoo.com'),
  ( 2, '7783208267', 'bobby@yahoo.com'),
  ( 3, '7967576489', 'duggy@yahoo.com'),
  ( 4, '4035677893', 'ruff@yahoo.com'),
  ( 5, '7789808765', 'oink@yahoo.com'),
  ( 6, '6045831234', 'fish@yahoo.com');

orders.id = order_id
