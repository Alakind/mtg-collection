DROP TABLE IF EXISTS card;
DROP TABLE IF EXISTS deck;
DROP TABLE IF EXISTS deck_cards;

CREATE TABLE card(
    id serial PRIMARY KEY,
    name VARCHAR(100),
    set_code VARCHAR(10),
    type_id INT,
    mana_neutral INT,
    mana_white INT,
    mana_black INT,
    mana_green INT,
    mana_blue INT,
    mana_red INT,
    description VARCHAR(512),
    commentary VARCHAR(512),
    approved INT
);

CREATE TABLE deck(
    id serial PRIMARY KEY,
    name VARCHAR(100),
    description VARCHAR(512),
    is_shared INT
);

CREATE TABLE deck_cards(
    deck_id serial PRIMARY KEY,
    card_id INT
);

INSERT INTO card(
    name,
    set_code,
    type_id,
    mana_green,
    description,
    commentary,
    approved
    ) 
    VALUES(
        'Brushwag',
        'IKO',
        1,
        1,
        '{3}{G}: Almighty Brushwagg gets +3/+3 until end of turn.',
        'Laughed at the brushwagg —Hunters’ expression meaning “died unexpectedly”',
        1
    );

INSERT INTO deck(
    name,
    description,
    is_shared
    ) 
    VALUES(
        'My deck',
        'My first deck ever',
        1
    );

INSERT INTO deck_cards(
    deck_id,
    card_id
    ) 
    VALUES(
        1,
        1
    );
