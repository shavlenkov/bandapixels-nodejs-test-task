-- CreateTable
CREATE TABLE `Products` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(256) NOT NULL,
    `subtitle` VARCHAR(500) NULL,
    `description` TEXT NOT NULL,
    `price` DOUBLE NOT NULL,
    `currency` VARCHAR(191) NOT NULL,
    `specifications` TEXT NOT NULL,
    `type` VARCHAR(128) NOT NULL,
    `profileImage` VARCHAR(1024) NOT NULL,
    `source` ENUM('rozetka', 'telemart') NOT NULL,
    `url` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
