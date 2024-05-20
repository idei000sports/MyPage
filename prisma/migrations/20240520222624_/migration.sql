/*
  Warnings:

  - You are about to drop the column `county_id` on the `Origin` table. All the data in the column will be lost.
  - Added the required column `county_code` to the `Origin` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Origin" DROP COLUMN "county_id",
ADD COLUMN     "county_code" TEXT NOT NULL;
