DROP DATABASE `taskspace`;
CREATE DATABASE `taskspace`;

CREATE TABLE `users`(
    `id` INT PRIMARY KEY,
    `email` VARCHAR(255) UNIQUE,
    `user` VARCHAR(30),
    `password` VARCHAR(60)
); 
CREATE TABLE `boards`(
    `id` INT,
    `user` INT,
    `title` VARCHAR(30),
    FOREIGN KEY (`user`) REFERENCES `users`(`id`),
    PRIMARY KEY (`id`, `user`)
); 
CREATE TABLE `columns`(
    `id` INT,
    `board` INT,
    `title` VARCHAR(30),
    FOREIGN KEY(`board`) REFERENCES `boards`(`id`),
    PRIMARY KEY(`id`, `board`)
); 
CREATE TABLE `tasks`(
    `id` INT,
    `column` INT,
    `title` VARCHAR(100),
    `description` TEXT,
    FOREIGN KEY(`column`) REFERENCES `columns`(`id`),
    PRIMARY KEY(`id`, `column`)
);