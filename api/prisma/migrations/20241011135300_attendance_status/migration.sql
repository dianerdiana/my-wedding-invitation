/*
  Warnings:

  - You are about to drop the column `attendaceStatus` on the `reservations` table. All the data in the column will be lost.
  - Added the required column `attendanceStatus` to the `reservations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `reservations` DROP COLUMN `attendaceStatus`,
    ADD COLUMN `attendanceStatus` VARCHAR(191) NOT NULL;
