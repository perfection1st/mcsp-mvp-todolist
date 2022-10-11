DROP TABLE "todo";

CREATE TABLE IF NOT EXISTS "todo" (
  id SERIAL PRIMARY KEY,
  list_item varchar(255) NOT NULL
);

INSERT INTO todo (list_item)
VALUES
  ('Create MVP'),
  ('Drink more coffee'),
  ('Refactor my To-do list app'),
  ('Ponder my life decisions');