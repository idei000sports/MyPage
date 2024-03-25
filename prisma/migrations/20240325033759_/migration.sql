/*
  Warnings:

  - Added the required column `City` to the `Origin` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Origin" ADD COLUMN     "City" TEXT NOT NULL;
