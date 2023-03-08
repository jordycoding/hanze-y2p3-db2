CREATE TABLE IF NOT EXISTS student
(
    id            INT          NOT NULL AUTO_INCREMENT,
    first_name    VARCHAR(255) NOT NULL,
    last_name     VARCHAR(255) NOT NULL,
    starting_year INT          NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS student_theme
(
    id            INT NOT NULL AUTO_INCREMENT,
    student_id    INT,
    theme_id      INT,
    start_year    INT NOT NULL,
    start_quarter INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS theme
(
    id      INT          NOT NULL AUTO_INCREMENT,
    name    VARCHAR(255) NOT NULL,
    credits INT          NOT NULL,
    year    INT          NOT NULL,
    quarter INT          NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS module
(
    id      INT          NOT NULL AUTO_INCREMENT,
    name    VARCHAR(255) NOT NULL,
    credits INT          NOT NULL,
    year    INT          NOT NULL,
    quarter INT          NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS theme_module
(
    id        INT NOT NULL AUTO_INCREMENT,
    theme_id  INT,
    module_id INT,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS test
(
    id         INT          NOT NULL AUTO_INCREMENT,
    module_id  INT,
    name       VARCHAR(255) NOT NULL,
    credits    INT          NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS grades
(
    id         INT NOT NULL AUTO_INCREMENT,
    student_id INT,
    module_id  INT,
    grade      INT NOT NULL,
    PRIMARY KEY (id)
);

ALTER TABLE student_theme
    ADD FOREIGN KEY (student_id) REFERENCES student (id);
ALTER TABLE student_theme
    ADD FOREIGN KEY (theme_id) REFERENCES theme (id);
ALTER TABLE test
    ADD FOREIGN KEY (module_id) REFERENCES module (id);
ALTER TABLE grades
    ADD FOREIGN KEY (student_id) REFERENCES student (id);
ALTER TABLE grades
    ADD FOREIGN KEY (module_id) REFERENCES module (id);
ALTER TABLE theme_module
    ADD FOREIGN KEY (theme_id) REFERENCES theme (id);
ALTER TABLE theme_module
    ADD FOREIGN KEY (module_id) REFERENCES module (id);

