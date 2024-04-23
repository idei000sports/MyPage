/*
  Warnings:

  - You are about to drop the column `city` on the `Origin` table. All the data in the column will be lost.
  - You are about to drop the column `country` on the `Origin` table. All the data in the column will be lost.
  - You are about to drop the column `county` on the `Origin` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `Origin` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Origin` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `county_id` to the `Origin` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Origin_name_county_key";

-- AlterTable
ALTER TABLE "Origin" DROP COLUMN "city",
DROP COLUMN "country",
DROP COLUMN "county",
DROP COLUMN "state",
ADD COLUMN     "county_id" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Origin_name_key" ON "Origin"("name");
