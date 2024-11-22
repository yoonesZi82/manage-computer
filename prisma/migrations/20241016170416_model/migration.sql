/*
  Warnings:

  - You are about to drop the column `userName` on the `Comment` table. All the data in the column will be lost.
  - Added the required column `username` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Comment` DROP COLUMN `userName`,
    ADD COLUMN `username` VARCHAR(191) NOT NULL;
