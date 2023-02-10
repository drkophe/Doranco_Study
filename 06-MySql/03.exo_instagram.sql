CREATE DATABASE instagram;

USE instagram;

CREATE TABLE utilisateur (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    pseudo VARCHAR(25) NOT NULL,
    email VARCHAR(50) NOT NULL
);


CREATE TABLE commentaires(
    ID INT PRIMARY KEY AUTO_INCREMENT,
    contenu VARCHAR(50),
    id_utilisateur INT REFERENCES utilisateur(ID),
    id_photos INT REFERENCES photos(ID)
);

CREATE TABLE photos(
    ID INT PRIMARY KEY AUTO_INCREMENT,
    url VARCHAR(225) NOT NULL,
    id_utilisateur INT REFERENCES utilisateur(ID)
);

INSERT INTO
    utilisateur (pseudo,email)
VALUES
    ('Reyna.Marvin','Reyna@gmail.com'),
    ('Micah.Cremin', 'Micah@gmail.com'),
    ('Alfredo66', 'Alfredo66@gmail.com'),
    ('Gerard_Mitchell42', 'Gerard_Mitchell42@gmail.com'),
    ('Frederique_Donnelly', 'Frederique_Donnelly@gmail.com');

INSERT INTO 
photos (url, id_utilisateur)
VALUES
  ('https://santina.net', 3),
        ('https://alayna.net', 5),
        ('https://kailyn.name', 3),
        ('http://marjolaine.name', 1),
        ('http://chet.net', 5),
        ('http://jerrold.org', 2),
        ('https://meredith.net', 4),
        ('http://isaias.net', 4),
        ('http://dayne.com', 4),
        ('http://colten.net', 2),
        ('https://adelbert.biz', 5),
        ('http://kolby.org', 1),
        ('https://deon.biz', 2),
        ('https://marina.com', 5),
        ('http://johnson.info', 1),
        ('https://linda.info', 2),
        ('https://tyrique.info', 4),
        ('http://buddy.info', 5),
        ('https://elinore.name', 2),
        ('http://sasha.com', 3);


INSERT INTO commentaires (contenu, id_utilisateur, id_photos)
VALUES
  ('Quo velit iusto ducimus quos a incidunt nesciunt facilis.', 2, 4),
        ('Non est totam.', 5, 5),
        ('Fuga et iste beatae.', 3, 3),
        ('Molestias tempore est.', 1, 5),
        ('Est voluptatum voluptatem voluptatem est ullam quod quia in.', 1, 5),
        ('Aut et similique porro ullam.', 1, 3),
        ('Fugiat cupiditate consequatur sit magni at non ad omnis.', 1, 2),
        ('Accusantium illo maiores et sed maiores quod natus.', 2, 5),
        ('Perferendis cumque eligendi.', 1, 2),
        ('Nihil quo voluptatem placeat.', 5, 5),
        ('Rerum dolor sunt sint.', 5, 2),
        ('Id corrupti tenetur similique reprehenderit qui sint qui nulla tenetur.', 2, 1),
        ('Maiores quo quia.', 1, 5),
        ('Culpa perferendis qui perferendis eligendi officia neque ex.', 1, 4),
        ('Reprehenderit voluptates rerum qui veritatis ut.', 1, 1),
        ('Aut ipsum porro deserunt maiores sit.', 5, 3),
        ('Aut qui eum eos soluta pariatur.', 1, 1),
        ('Praesentium tempora rerum necessitatibus aut.', 4, 3),
        ('Magni error voluptas veniam ipsum enim.', 4, 2),
        ('Et maiores libero quod aliquam sit voluptas.', 2, 3),
        ('Eius ab occaecati quae eos aut enim rem.', 5, 4),
        ('Et sit occaecati.', 4, 3),
        ('Illum omnis et excepturi totam eum omnis.', 1, 5),
        ('Nemo nihil rerum alias vel.', 5, 1),
        ('Voluptas ab eius.', 5, 1),
        ('Dolor soluta quisquam voluptatibus delectus.', 3, 5),
        ('Consequatur neque beatae.', 4, 5),
        ('Aliquid vel voluptatem.', 4, 5),
        ('Maiores nulla ea non autem.', 4, 5),
        ('Enim doloremque delectus.', 1, 4),
        ('Facere vel assumenda.', 2, 5),
        ('Fugiat dignissimos dolorum iusto fugit voluptas et.', 2, 1),
        ('Sed cumque in et.', 1, 3),
        ('Doloribus temporibus hic eveniet temporibus corrupti et voluptatem et sint.', 5, 4),
        ('Quia dolorem officia explicabo quae.', 3, 1),
        ('Ullam ad laborum totam veniam.', 1, 2),
        ('Et rerum voluptas et corporis rem in hic.', 2, 3),
        ('Tempora quas facere.', 3, 1),
        ('Rem autem corporis earum necessitatibus dolores explicabo iste quo.', 5, 5),
        ('Animi aperiam repellendus in aut eum consequatur quos.', 1, 2),
        ('Enim esse magni.', 4, 3),
        ('Saepe cumque qui pariatur.', 4, 4),
        ('Sit dolorem ipsam nisi.', 4, 1),
        ('Dolorem veniam nisi quidem.', 2, 5),
        ('Porro illum perferendis nemo libero voluptatibus vel.', 3, 3),
        ('Dicta enim rerum culpa a quo molestiae nam repudiandae at.', 2, 4),
        ('Consequatur magnam autem voluptas deserunt.', 5, 1),
        ('Incidunt cum delectus sunt tenetur et.', 4, 3),
        ('Non vel eveniet sed molestiae tempora.', 2, 1),
        ('Ad placeat repellat et veniam ea asperiores.', 5, 1),
        ('Eum aut magni sint.', 3, 1),
        ('Aperiam voluptates quis velit explicabo ipsam vero eum.', 1, 3),
        ('Error nesciunt blanditiis quae quis et tempora velit repellat sint.', 2, 4),
        ('Blanditiis saepe dolorem enim eos sed ea.', 1, 2),
        ('Ab veritatis est.', 2, 2),
        ('Vitae voluptatem voluptates vel nam.', 3, 1),
        ('Neque aspernatur est non ad vitae nisi ut nobis enim.', 4, 3),
        ('Debitis ut amet.', 4, 2),
        ('Pariatur beatae nihil cum molestiae provident vel.', 4, 4),
        ('Aperiam sunt aliquam illum impedit.', 1, 4),
        ('Aut laudantium necessitatibus harum eaque.', 5, 3),
        ('Debitis voluptatum nesciunt quisquam voluptatibus fugiat nostrum sed dolore quasi.', 3, 2),
        ('Praesentium velit voluptatem distinctio ut voluptatum at aut.', 2, 2),
        ('Voluptates nihil voluptatum quia maiores dolorum molestias occaecati.', 1, 4),
        ('Quisquam modi labore.', 3, 2),
        ('Fugit quia perferendis magni doloremque dicta officia dignissimos ut necessitatibus.', 1, 4),
        ('Tempora ipsam aut placeat ducimus ut exercitationem quis provident.', 5, 3),
        ('Expedita ducimus cum quibusdam.', 5, 1),
        ('In voluptates doloribus aut ut libero possimus adipisci iste.', 3, 2),
        ('Sit qui est sed accusantium quidem id voluptatum id.', 1, 5),
        ('Libero eius quo consequatur laudantium reiciendis reiciendis aliquid nemo.', 1, 2),
        ('Officia qui reprehenderit ut accusamus qui voluptatum at.', 2, 2),
        ('Ad similique quo.', 4, 1),
        ('Commodi culpa aut nobis qui illum deserunt reiciendis.', 2, 3),
        ('Tenetur quam aut rerum doloribus est ipsa autem.', 4, 2),
        ('Est accusamus aut nisi sit aut id non natus assumenda.', 2, 4),
        ('Et sit et vel quos recusandae quo qui.', 1, 3),
        ('Velit nihil voluptatem et sed.', 4, 4),
        ('Sunt vitae expedita fugiat occaecati.', 1, 3),
        ('Consequatur quod et ipsam in dolorem.', 4, 2),
        ('Magnam voluptatum molestias vitae voluptatibus beatae nostrum sunt.', 3, 5),
        ('Alias praesentium ut voluptatem alias praesentium tempora voluptas debitis.', 2, 5),
        ('Ipsam cumque aut consectetur mollitia vel quod voluptates provident suscipit.', 3, 5),
        ('Ad dignissimos quia aut commodi vel ut nisi.', 3, 3),
        ('Fugit ut architecto doloremque neque quis.', 4, 5),
        ('Repudiandae et voluptas aut in excepturi.', 5, 3),
        ('Aperiam voluptatem animi.', 5, 1),
        ('Et mollitia vel soluta fugiat.', 4, 1),
        ('Ut nemo voluptas voluptatem voluptas.', 5, 2),
        ('At aut quidem voluptatibus rem.', 5, 1),
        ('Temporibus voluptates iure fuga alias minus eius.', 2, 3),
        ('Non autem laboriosam consectetur officiis aut excepturi nobis commodi.', 4, 3),
        ('Esse voluptatem sed deserunt ipsum eaque maxime rerum qui.', 5, 5),
        ('Debitis ipsam ut pariatur molestiae ut qui aut reiciendis.', 4, 4),
        ('Illo atque nihil et quod consequatur neque pariatur delectus.', 3, 3),
        ('Qui et hic accusantium odio quis necessitatibus et magni.', 4, 2),
        ('Debitis repellendus inventore omnis est facere aliquam.', 3, 3),
        ('Occaecati eos possimus deleniti itaque aliquam accusamus.', 3, 4),
        ('Molestiae officia architecto eius nesciunt.', 5, 4),
        ('Minima dolorem reiciendis excepturi culpa sapiente eos deserunt ut.', 3, 3);


ALTER TABLE commentaires CHANGE contenu contenu VARCHAR(250);

SELECT * FROM utilisateur;
SELECT * FROM photos;
SELECT * FROM commentaires;

SELECT contenu FROM commentaires WHERE id_utilisateur = 5;
SELECT contenu FROM commentaires WHERE id_utilisateur = SELECT pseudo FROM utilisateur ('Aflredo%');


SELECT contenu, pseudo FROM commentaires JOIN utilisateur ON commentaires.id_utilisateur = utilisateur.id;

# SELECT contenu, url, pseudo FROM commentaires JOIN photos,utilisateur ON photos.id_utilisateur = utilisateur.id, commentaires.id_utilisateur = utilisateur.id;

# SELECT contenu, url, pseudo FROM commentaires JOIN photos AND utilisateurs ON photos.id_utilisateur = commentaires.id_utilisateur AND commentaire.id_utilisateur = utilisateur.id;

# ERROR
SELECT pseudo, url, contenu FROM commentaires JOIN utilisateur ON commentaires.id_utilisateur = utilisateur.id JOIN photos ON utilisateur.id = photos.id_utilisateur;

# GOOD
SELECT pseudo, url, contenu FROM commentaires JOIN utilisateur ON commentaires.id_utilisateur = utilisateur.id JOIN photos ON commentaires.id_photos = photos.id;

SELECT pseudo, url, contenu FROM commentaires JOIN utilisateur ON commentaires.id_utilisateur = utilisateur.id JOIN photos ON commentaires.id_photos = photos.id WHERE pseudo LIKE 'A%';



SELECT pseudo FROM utilisateur WHERE pseudo LIKE 'A%';



#-------------------------------------------

# EXO : trouver les utilisateurs qui ont commenter sur les 2 premiere photos (instagram)
SELECT pseudo FROM utilisateur JOIN photos ON photos.id_utilisateur = utilisateur.id WHERE photos.id < 3; 

# EXO : selectionner le nombre totale des commentaires( instagram)
SELECT COUNT(id) FROM commentaires;

# EXO :  selectionner le nombre totale des utilisateurs( instagram)
SELECT COUNT(id) FROM utilisateur;

# EXO : selectionner le nombre totale des photos(instagram)
SELECT COUNT(id) FROM photos;

# EXO : selectionner le commentaire qui a l'identifiant maximum (il faut utiliser la fonction d'aggrégat max)
SELECT contenu, MAX(id) FROM commentaires;
SELECT id, contenu FROM commentaires WHERE ID > 99;
SELECT id, contenu FROM commentaires WHERE id IN SELECT MAX(id) from commentaires;

# EXO : selectionner id, contenu et  le nombre de lettre du contenu pour chaque commentaire (utiliser la fonction LENGTH avec la colonne contenu)
SELECT id, contenu, LENGTH(contenu) FROM commentaires GROUP BY id, contenu, contenu;

# EXO : afficher le commentaire qui le plus de lettre  (instagram)
SELECT MAX(LENGTH(contenu)) FROM commentaires;
SELECT LENGTH(contenu), contenu from commentaire ORDER BY LENGTH(contenu) DESC LIMIT 1;

# EXO : afficher le commentaire qui le moins de lettre
SELECT MIN(LENGTH(contenu)) FROM commentaires;



les utilisateurs peuvent commenter sur les photos qui les ont postés: 
# EXO: lister pseudo, l'URL et le contenu de chaque photo/commentaire ou l'utilisateur a commenté sur sa propre photo

SELECT pseudo, url FROM utilisateur 
    JOIN photos ON photos.id_utilisateur=utilisateur.id;
    





SELECT pseudo, url, contenu FROM utilisateur 
    JOIN photos ON photos.id_utilisateur=utilisateur.id
    JOIN commentaires ON commentaires.id_photos=photos.id AND commentaires.id_utilisateur=photos.id_utilisateur;

SELECT 
utilisateur.id as id_use, 
pseudo, 
id_photos as id_phot, 
url, 
commentaires.id as id_com, 
contenu 
FROM utilisateur 

    JOIN photos ON photos.id_utilisateur=utilisateur.id
    JOIN commentaires ON commentaires.id_photos=photos.id AND commentaires.id_utilisateur=photos.id_utilisateur;


-- select contenu, id_utilisateur, url, id_photo from commentaire join photo on commentaire.id_photo= photo.id;

#######

# EXO : trouver le nombre de commentaires pour chaque photo
SELECT 
id_photos, 
COUNT(*) 

FROM commentaires

GROUP BY id_photos;




SELECT id_photos, COUNT(id) AS nombre_de_com FROM commentaires WHERE id_photos < 3 GROUP BY id_photos;

# EXO  : selectionner le nombre de commentaire pour chaque photo mais à condition que l'id de la photo est inférieur à trois et la photo a au moins 2 commentaires
SELECT id_photos, COUNT(id) AS nombre_de_com 
FROM commentaires 
WHERE id_photos < 3 
GROUP BY id_photos 
HAVING nombre_de_com >= 2;

# ORDRE DE REQUEST TOUJOURS LA MEME !
SELECT FROM WHERE GROUP BY HAVING ORDER BY LIMIT;

#EXO :selectionner les utilisateurs qui ont commenté sur l'une des 2 premières photos (l'utilisateur doit avoir au moins ajouté 2 commentaires sur l'une des photos)

SELECT 
pseudo, 
id_photos, 
COUNT(commentaires.id) AS nombre_de_com

FROM utilisateur
JOIN commentaires ON commentaires.id_utilisateur=utilisateur.id
WHERE commentaires.id_photos < 3
GROUP BY pseudo
HAVING nombre_de_com >=2;


# EXO : trouver tous les commentaires(id,contenu,pseudo de l'utilisateur qui a écrit le commentaire) pour la photo avec ID = 3

SELECT 
utilisateur.id AS ID_User,
pseudo, 
contenu,
commentaires.id_photos AS ID_Photo

FROM utilisateur
JOIN commentaires ON commentaires.id_utilisateur=utilisateur.id
WHERE commentaires.id_photos = 3
ORDER BY pseudo;



#EXO : trouver la photo (id_photo, nombre de commentaires) avec le plus de commentaires

SELECT
id_photos,
COUNT(id) AS nombre_de_com

FROM commentaires
GROUP BY id_photos
ORDER BY nombre_de_com DESC LIMIT 1;
