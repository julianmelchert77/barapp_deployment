/*
  Warnings:

  - The primary key for the `orden` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idid` on the `orden` table. All the data in the column will be lost.
  - Added the required column `id` to the `Orden` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Orden` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `estado` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);
