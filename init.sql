CREATE SCHEMA IF NOT EXISTS users_db;
SET search_path TO users_db;


CREATE TABLE IF NOT EXISTS 
        users (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL
            );

INSERT INTO users (name, email)
        VALUES
                ('Mohamed', 'mohamed@example.com'),
                ('Ali', 'ali@example.com'),
                ('Ahmed', 'ahmed@example.com'),
                ('Omer', 'omer@example.com'),
                ('Othman', 'othman@example.com'),
                ('Jamal', 'jamal@example.com'),
                ('Jalal', 'jalal@example.com'),
                ('Hani', 'hani@example.com'),
                ('Ibrahim', 'ibrahim@example.com');