CREATE TABLE ville(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(10),
    pays VARCHAR(10) NOT NULL,
    population INT NOT NULL,
    surface FLOAT NOT NULL
);

CREATE TABLE telephone(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(15) NOT NULL,
    fabricant VARCHAR(10) NOT NULL,
    prix INT NOT NULL,
    unités_vendues FLOAT NOT NULL
);

INSERT INTO ville (nom, pays, population, surface) VALUES
    ('Paris','France',2161000, 105.4),
    ('Tokyo','Japon', 38505000, 8223),
    ('Sao Paolo', 'brésil', 20935000, 3043),
    ('Shanghai', 'chine', 22125000, 4015);

INSERT INTO 
    telephone (nom, fabricant, prix, unités_vendues) 
VALUES
    ('N1200','Nokia',199, 1925),
    ('Iphone4','Apple', 399, 2359),
    ('S5620 Monte', 'Samsung', 250, 2385),
    ('N8', 'Nokia', 150, 7543);
