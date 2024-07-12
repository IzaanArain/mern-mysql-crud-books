
CREATE TABLE books(
id INT PRIMARY KEY AUTO_INCREMENT UNIQUE NOT NULL,
title VARCHAR(45) NOT NULL,
description VARCHAR(255) NOT NULL,
cover VARCHAR(100)
);

INSERT INTO books(title,description,cover) VALUES 
("test book","desc desc desc desc","cover.png"),
("demo book","desc desc desc desc",null)
;

