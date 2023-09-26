CREATE TABLE item (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO item (title) VALUES ('Stuff'), ('Doodads');


CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  firstname VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  dateofbirth VARCHAR (15) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  postcode VARCHAR(10) NOT NULL,
  phone VARCHAR(20) NOT NULL
);
INSERT INTO users (firstname,lastname,dateofbirth,email,password, address, city, postcode,phone )
VALUES             ('david','david', '12/06/1986','david@orange.fr','058585', '6 rue david','valence', '26000','0658525654' );

CREATE TABLE products (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    description TEXT,
    price DECIMAL(10, 2),
    quantity_in_stock INT,
    category VARCHAR(255),
    image VARCHAR(255)
);


CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_date DATE,
    order_status VARCHAR(50),
    total_amount_ht DECIMAL(10, 2),
    total_amount_ttc DECIMAL(10, 2),
    estimated_delivery_date DATE,
    shipping_address TEXT
);


CREATE TABLE cart (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    price DECIMAL(10, 2),
    quantity INT,
    image VARCHAR(255)
);

