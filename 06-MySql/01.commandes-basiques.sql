# ORDRE DE REQUEST TOUJOURS LA MEME !
SELECT FROM WHERE GROUP BY HAVING ORDER BY LIMIT;

-- A) permet de se connecter en tant que root
mysql - u root - p -- CMD de windows

-- invite de commande de mysql : 
-- on saisie juste le mot de passe 

-- MAC:
/ usr / local / mysql / bin / mysql - u root - p -- B) créer un nouvel utilisateur

-- B) créer un nouveau utilisateur
create user 'mohamed3'@'%' identified with mysql_native_password by '12345';

-- lui attribuer tout les privileges:
grant all privileges on *.* to 'mohamed3'@'%';

-- confirmer les privileges
flush privileges;


-- C) Selectionner l'utilisateur courant(actuel)
select user();

-- D) se connecter en tant qu'utilisateur(quelconque):
system mysql -u mohamed3 -p;
system mysql -u lorenzo -p;
12345

-- F) utiliser une base de données
use mysql;

-- G) afficher la liste des tables d'une base de données:
show tables;

-- H) création d'une nouvelle base de données:
CREATE DATABASE dwwm;
-- c'est la meme chose , MYSQL n'est pas sensible au cases
create database dwwm;
create database DWWM;

-- utilisation de dwwm


-- majuscule ou minuscule : mysql ne fait pas la différence pour les mots clés et les identificateurs.

-- IDENTIFICATEURS:  noms de tables, noms de base , nom d'utilisateur
-- MOTS CLE : show , use create database select , system , grant
-- MAJUSCULES : pour les mots clés
-- MINUSCULES  : pour les idenficateurs


-- i) afficher la base de données actuelle: 
SELECT DATABASE();

-- J) création de table:
-- commande SQL 
CREATE TABLE ville(
    nom VARCHAR(10) ,
    pays VARCHAR(10) NOT NULL,
    population INT NOT NULL,
    surface FLOAT NOT NULL
);

-- montrer les tables exitantes dans une base de données:
SHOW TABLES;

-- K) description de la table
DESC ville;

DESCRIBE ville;


-- L) Insertion des données
-- 1ere façon
INSERT INTO ville VALUES('Paris','France',2161000, 105.4);
INSERT INTO ville VALUES ('Tokyo','Japon', 38505000, 8223);
INSERT INTO ville VALUES('Sao Paolo', 'brésil', 20935000, 3043);
INSERT INTO ville VALUES ('Shanghai', 'chine', 22125000, 4015);

-- 2eme façon
INSERT INTO ville (nom, population, surface, pays) VALUES ('Paris',2161000,105.4, 'France');

-- 3eme façon : permet d'inserer plusieurs tuples en meme temps
INSERT INTO ville VALUES
    ('Paris','France',2161000, 105.4),
    ('Tokyo','Japon', 38505000, 8223),
    ('Sao Paolo', 'brésil', 20935000, 3043),
    ('Shanghai', 'chine', 22125000, 4015);

-- M) afficher la table ville avec toutes les colonnes et toutes les lignes
SELECT * FROM ville;

-- N) effacer l'historique de l'invite de commande : 
\! cls --windows

-- commentaire  : -- ou #