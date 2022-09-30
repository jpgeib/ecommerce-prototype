DROP DATABASE IF EXISTS site_db;

CREATE DATABASE site_db;

USE site_db;

CREATE TABLE orders (
    id INT NOT NULL AUTO_INCREMENT,
    order_id INT NOT NULL,
    order_quantity INT NOT NULL,
    order_date DATETIME NOT NULL,
    total_cost DECIMAL(7, 2) NOT NULL,
    customer_id INT NOT NULL,
    customer_first_name VARCHAR(32) NOT NULL,
    customer_last_name VARCHAR(32) NOT NULL,
    discount DECIMAL(5, 2),
    discount_applied BOOLEAN NOT NULL,
    fulfilled BOOLEAN NOT NULL,
    paid BOOLEAN NOT NULL,
    shipping_type VARCHAR(32) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE customers (
    id INT NOT NULL AUTO_INCREMENT,
    customer_id INT NOT NULL,
    first_name VARCHAR(32) NOT NULL,
    last_name VARCHAR(32) NOT NULL,
    dob DATETIME NOT NULL,
    city VARCHAR(32) NOT NULL,
    state VARCHAR(32) NOT NULL,
    address VARCHAR(32) NOT NULL,
    zip_code INT NOT NULL,
    country VARCHAR(32) NOT NULL,
    email VARCHAR(32) NOT NULL,
    password VARCHAR(32) NOT NULL,
    verified BOOLEAN NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE product (
    id INT NOT NULL AUTO_INCREMENT,
    product_id INT NOT NULL,
    product_name VARCHAR(128) NOT NULL,
    product_price DECIMAL(5, 2) NOT NULL,
    size VARCHAR(4) NOT NULL,
    color VARCHAR(32) NOT NULL,
    available_inventory INT NOT NULL,
    committed_inventory INT NOT NULL,
    collection VARCHAR(32) NOT NULL,
    in_stock BOOLEAN NOT NULL,
    on_sale BOOLEAN NOT NULL,
    PRIMARY KEY(id)
);