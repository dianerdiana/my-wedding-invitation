/*
  Warnings:

  - Added the required column `brideAddress` to the `wedding_config` table without a default value. This is not possible if the table is not empty.
  - Added the required column `groomAddress` to the `wedding_config` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `wedding_config` ADD COLUMN `brideAddress` VARCHAR(191) NOT NULL,
    ADD COLUMN `groomAddress` VARCHAR(191) NOT NULL;
