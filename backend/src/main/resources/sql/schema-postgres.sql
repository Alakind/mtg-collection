DROP TABLE IF EXISTS card;

CREATE TABLE card(card_id serial PRIMARY KEY, name VARCHAR(255));

INSERT INTO card(name) VALUES('Brushwag');
