# ORDRE DE REQUEST TOUJOURS LA MEME !
SELECT FROM WHERE GROUP BY HAVING ORDER BY LIMIT;

-- permet de selectionner toutes les villes(tuples) avec toutes les colonnes
SELECT * FROM ville;

-- permet de sectionner toutes les villes (tuples) avec la colonne nom
SELECT nom FROM ville;

-- permet de selectionner toutes les villes (tuples) avec les colonnes (nom , population)

SELECT nom, population FROM ville;

-- selectionner le nom et la densité de toutes les villes

SELECT nom, (population / surface) AS densité FROM ville;


-- EXO --

-- ville

SELECT * FROM ville WHERE (population/ surface) < 10000;

SELECT * FROM ville WHERE pays ='Japon';

SELECT * FROM ville WHERE nom LIKE 'S%';

SELECT * FROM ville WHERE (population/ surface) > 3000;

SELECT * FROM ville WHERE  nom ='Tokyo';

SELECT * FROM ville WHERE  nom !='Paris' AND surface != 3043 AND surface != 8223;


-- telephone

SELECT nom, prix FROM telephone WHERE unités_vendues > 5000;
SELECT nom, fabricant FROM telephone WHERE fabricant IN ('Apple','Samsung');
SELECT nom, (prix * unités_vendues) AS total_revenue FROM telephone WHERE (prix * unités_vendues) > 1000000;



-- Solution PROF --

-- 1- ecrivez une requete qui selectionnera toutes les villes sauf paris
SELECT * FROM ville WHERE nom != 'Paris';

-- 2- selectionner toutes les villes du japon
SELECT * FROM ville WHERE pays = 'Japon';

-- 3- selectionner les villes ou leurs noms commencent par la lettre S
SELECT * FROM ville WHERE nom LIKE 's%';
SELECT * FROM ville WHERE nom LIKE 'S%';

-- 4- selectionner les villes qui ont une surface supérieur à 4000
SELECT * FROM ville WHERE surface > 4000;

-- 5- selectionner les villes qui ont une densité supérieure à 3000
SELECT *, (population / surface) AS densité FROM ville WHERE (population / surface) > 3000;

-- 6- selectionner la ville tokyo
SELECT * FROM ville WHERE nom = 'Tokyo';

-- 7- selectionner les villes ou le nom n'est pas paris et la surface n'est pas égale à 3043 et 8223
SELECT * FROM ville WHERE nom != 'Paris' AND surface != 3043 AND surface != 8223;
SELECT * FROM ville WHERE nom != 'Paris' AND surface NOT IN (8223, 3043);