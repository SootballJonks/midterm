DROP TABLE IF EXISTS stories CASCADE;

CREATE TABLE stories (
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INTEGER REFERENCES users(id) NOT NULL,
    title VARCHAR(255) NOT NULL,
    text TEXT,
    tags TEXT []
);