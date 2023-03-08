INSERT INTO student (first_name, last_name, starting_year)
VALUES ('Bram', 'De Vries', 2020);

INSERT INTO theme (name, credits, year, quarter)
VALUES ('Datastructuren', 15, 1, 1);

INSERT INTO module (name, credits, year, quarter)
VALUES ('Databases', 5, 1, 1),
       ('SQL advanced', 5, 1,1),
        ('NoSQL databases', 5, 1,1);

INSERT INTO theme_module (theme_id, module_id)
VALUES (1, 1),
       (1,2),
       (1,3);

INSERT INTO test (module_id, student_id, name, grade)