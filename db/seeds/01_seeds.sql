-- Users table seeds here (Example)
INSERT INTO users (name, phone_number, email) VALUES
  ('FunkyFuuds', '7783208267', 'funkyfuuds@yahoo.com'),
  ('Bob', '7783208267', 'bobby@yahoo.com'),
  ('Doug', '7967576489', 'duggy@yahoo.com'),
  ('Bulldog', '4035677893', 'ruff@yahoo.com'),
  ('Porky', '7789808765', 'oink@yahoo.com'),
  ('Fish', '6045831234', 'fish@yahoo.com');


INSERT INTO items (item, description, price, cooking_time, thumbnail_photo) VALUES
  ('Funky Burger', 'Your favourite burger but funkier', 2000, 3, '../../docs/burger.jpeg'),
  ('Paralizing pizza', 'Do not test it', 3000, 10, '../../docs/pizza.jpeg'),
  ('Stuffed animal', '????', 3000, 10, '../../docs/stuffed_animal.jpeg'),
  ('Pickled fish in a bucket', 'Straight from the docks and into the brine', 4000, 3, '../../docs/fish.jpeg' ),
  ('Pork?', 'Your guess is as good as ours', 300, 5, '../../docs/pork.jpeg'),
  ('Seared burrito', 'Unexpected consequences', 600, 4, '../../docs/burrito.jpeg');
  ('Angry Perogies', 'Proceed with caution', 800, 8, '../../docs/burrito.jpeg');
  ('Furry Bagel', 'No questions asked', 250, 3, '../../docs/burrito.jpeg');
  ('Crunchy farmers wrap', 'For your dog maybe?', 150, 4, '../../docs/burrito.jpeg');
  ('Aged Crème Brulée', 'Chefs special', 300, 2, '../../docs/burrito.jpeg');

  -- INSERT INTO orders (user_id, item_id) VALUES
  -- (2, 3),
  -- (5, 4),
  -- (6, 6)
