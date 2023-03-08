INSERT INTO module (name, credits, year, quarter)
VALUES
    ('Databases', 6, 1, 2),
    ('Programming', 6, 1, 1),
    ('Data Science', 6, 2, 1),
    ('Algorithms', 6, 2, 2);

INSERT INTO theme (name, credits, year, quarter)
VALUES
    ('Datastructuren', 12, 1, 1),
    ('Artificial intelligence', 12, 2, 2);

INSERT INTO student (first_name, last_name, starting_year)
VALUES
    ('Lotte', 'Jansen', 2020),
    ('Daan', 'van der Meer', 2021);

INSERT INTO student_theme (student_id, theme_id, start_year, start_quarter)
VALUES
    (1, 1, 2020, 1),
    (2, 2, 2021, 2);

INSERT INTO theme_module (theme_id, module_id)
VALUES
    (1, 2),
    (2, 1),
    (2, 4),
    (1, 3);

INSERT INTO test (module_id, name, credits)
VALUES
    (1, 'AI Programming', 6),
    (2, 'Relational databases', 6),
    (4, 'Algorithms and Datastructures', 6);

INSERT INTO grades (student_id, module_id, grade)
VALUES
    (1, 2, 8),
    (1, 1, 7),
    (2, 2, 9),
    (2, 1, 6);

