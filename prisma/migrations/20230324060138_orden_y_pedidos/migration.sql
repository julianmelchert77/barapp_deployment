-- CreateTable
CREATE TABLE `Orden` (
    `idid` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `fecha` VARCHAR(191) NOT NULL,
    `total` DOUBLE NOT NULL,
    `pedido` JSON NOT NULL,

    PRIMARY KEY (`idid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
