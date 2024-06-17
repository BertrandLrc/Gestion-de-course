CREATE TABLE Rayon (
    ID INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    Nom VARCHAR(100) NOT NULL
);

CREATE TABLE Statut (
    ID INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    Nom VARCHAR(50) NOT NULL
);

CREATE TABLE Produit (
    ID INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    Nom VARCHAR(100) NOT NULL,
    Rayon_id INT NOT NULL,
    Statut_id INT NOT NULL,
    FOREIGN KEY (Rayon_id) REFERENCES Rayon(id),
    FOREIGN KEY (Statut_id) REFERENCES Statut(id)
);

INSERT INTO Rayon (Nom) VALUES 
    ('Épicerie'), 
    ('Fruits et Légumes'), 
    ('Produits Laitiers'), 
    ('Viandes et Poissons'), 
    ('Boissons');

INSERT INTO Statut (Nom) VALUES 
    ('Acheté'), 
    ('À acheter');

INSERT INTO Produit (Nom, Rayon_id, Statut_id) VALUES 
    ('Riz', 1, 2),
    ('Pâtes', 1, 2),
    ('Farine', 1, 2),
    ('Sucre', 1, 2),
    ('Huile olive', 1, 2),
    ('Sel', 1, 2),
    ('Poivre', 1, 2),
    ('Légumineuses', 1, 2),
    ('Pommes', 2, 2),
    ('Bananes', 2, 2),
    ('Carottes', 2, 2),
    ('Tomates', 2, 2),
    ('Concombres', 2, 2),
    ('Salade verte', 2, 2),
    ('Brocoli', 2, 2),
    ('Pommes de terre', 2, 2),
    ('Lait', 3, 2),
    ('Fromage', 3, 2),
    ('Yaourts', 3, 2),
    ('Beurre', 3, 2),
    ('Crème fraîche', 3, 2),
    ('Fromage blanc', 3, 2),
    ('Poulet', 4, 2),
    ('Bœuf', 4, 2),
    ('Jambon', 4, 2),
    ('Saumon', 4, 2),
    ('Thon en conserve', 4, 2),
    ('Eau minérale', 5, 2),
    ('Jus orange', 5, 2),
    ('Café', 5, 2);

