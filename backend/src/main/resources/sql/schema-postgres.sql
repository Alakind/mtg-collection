DROP TABLE IF EXISTS card;
DROP TABLE IF EXISTS deck;
DROP TABLE IF EXISTS deck_cards;

DROP TABLE IF EXISTS card_tag;
DROP TABLE IF EXISTS card_ability;

CREATE TABLE card(
    id serial PRIMARY KEY,
    name VARCHAR(100),
    set_code VARCHAR(10),
    type VARCHAR(100),
    power INT,
    toughness INT,
    abilities INT,
    tags INT,
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

CREATE TABLE card_tag(
    card_id INT,
    tag VARCHAR(255)
);

CREATE TABLE card_ability(
    card_id INT,
    ability VARCHAR(255)
);

INSERT INTO card(
    name,
    set_code,
    type,
    power,
    toughness,
    mana_green,
    description,
    commentary,
    approved
    ) 
    VALUES(
        'Almighty Brushwagg',
        'IKO',
        'creature',
        1,
        1,
        1,
        '{3}{G}: Almighty Brushwagg gets +3/+3 until end of turn.',
        'Laughed at the brushwagg —Hunters’ expression meaning “died unexpectedly”',
        0
    );

INSERT INTO card_tag(
    card_id,
    tag
    )
    VALUES (
        1,
        'brushwagg'
    );

INSERT INTO card_ability(
    card_id,
    ability
    )
    VALUES (
        1,
        'trample'
    );

INSERT INTO card(
    name,
    set_code,
    type,
    power,
    toughness,
    mana_blue,
    mana_neutral,
    description,
    commentary,
    approved
    ) 
    VALUES(
        'Frost Trickster',
        'STX',
        'creature',
        2,
        2,
        1,
        2,
        'When Frost Trickster enters the battlefield, tap target creature an opponent controls. That creature doesnt untap during its controllers nest untap step.',
        'The most important skill in a Mage Tower match is keeping ones cool.',
        0
    );

INSERT INTO card_tag(
    card_id,
    tag
    )
    VALUES (
        2,
        'bird'
    );

INSERT INTO card_tag(
    card_id,
    tag
    )
    VALUES (
        2,
        'wizard'
    );

INSERT INTO card_ability(
    card_id,
    ability
    )
    VALUES (
        2,
        'flying'
    );

INSERT INTO card(
    name,
    set_code,
    type,
    mana_red,
    mana_neutral,
    description,
    commentary,
    approved
    ) 
    VALUES(
        'Heated Debate',
        'STX',
        'instant',
        1,
        2,
        'This spell cant be countered. Heated debate deals 4 damage to target creature or planeswalker.',
        '"While you were wasting time with abstract equations, I mastered ancient Oggyar fire magic. Your move."',
        0
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
