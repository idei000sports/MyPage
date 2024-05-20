/*
  Warnings:

  - A unique constraint covering the columns `[county_code,country,state,county]` on the table `County` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `county_code` to the `County` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "County_country_state_county_key";

-- AlterTable
ALTER TABLE "County" ADD COLUMN     "county_code" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "County_county_code_country_state_county_key" ON "County"("county_code", "country", "state", "county");
