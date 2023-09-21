CREATE TABLE riches (
    id INTEGER PRIMARY KEY UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    about TEXT NOT NULL,
    imgUrl VARCHAR(512) NOT NULL NOT NULL,
    nationality VARCHAR(50),
    birthDate DATE NOT NULL,
    fortune FLOAT NOT NULL
)