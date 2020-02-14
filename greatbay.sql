DROP DATABASE IF EXISTS greatbay_db;

CREATE DATABASE greatbay_db;

USE greatbay_db;

CREATE TABLE items (
	id INTEGER NOT NULL AUTO_INCREMENT,
    product VARCHAR(100) NOT NULL,
    price INTEGER(10) NOT NULL,
    highest_bid INTEGER(10) NOT NULL,
    highest_bidder VARCHAR(100),
    
    PRIMARY KEY (id)
);

INSERT INTO items (product, price, highest_bid)
VALUES ('Water Bottle', 2.95, 0),
('Charger', 10.00, 0);



