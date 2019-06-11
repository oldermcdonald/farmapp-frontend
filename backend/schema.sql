CREATE DATABASE farmapp;

CREATE TABLE todolist(
  id SERIAL PRIMARY KEY,
  title VARCHAR(200),
  category VARCHAR(200),
  details VARCHAR(400),
  location VARCHAR(200),
  lat DECIMAL(9,6),
  long DECIMAL(9,6)
);