DROP DATABASE `taskspace`;
CREATE DATABASE `taskspace`;

CREATE TABLE `users`(
    `userId` INT PRIMARY KEY AUTO_INCREMENT,
    `email` VARCHAR(255) UNIQUE,
    `user` VARCHAR(30),
    `password` VARCHAR(60)
); 
CREATE TABLE `boards`(
    `boardId` INT AUTO_INCREMENT,
    `userID` INT,
    `title` VARCHAR(30),
    `last_task_id` INT DEFAULT 0,
    FOREIGN KEY (`userID`) REFERENCES `users`(`userId`),
    PRIMARY KEY (`boardId`, `userID`)
); 
CREATE TABLE `columns`(
    `columnId` INT AUTO_INCREMENT,
    `boardId` INT,
    `title` VARCHAR(30),
    FOREIGN KEY(`boardId`) REFERENCES `boards`(`boardId`),
    PRIMARY KEY(`columnId`, `boardId`)
); 
CREATE TABLE `tasks`(
    `taskId` INT,
    `columnId` INT,
    `title` VARCHAR(100),
    `description` TEXT,
    `next_task_id` INT,
    FOREIGN KEY(`next_task_id`) REFERENCES `tasks`(`taskId`),
    FOREIGN KEY(`columnId`) REFERENCES `columns`(`columnId`),
    PRIMARY KEY(`taskId`, `columnId`)
);
