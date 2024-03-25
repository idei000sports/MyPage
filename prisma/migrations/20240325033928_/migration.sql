/*
  Warnings:

  - You are about to drop the column `City` on the `Origin` table. All the data in the column will be lost.
  - You are about to drop the `City` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `city` to the `Origin` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Origin" DROP COLUMN "City",
ADD COLUMN     "city" TEXT NOT NULL;

-- DropTable
DROP TABLE "City";

-- CreateTable
CREATE TABLE "CityName" (
    "id" SERIAL NOT NULL,
    "country" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "county" TEXT NOT NULL,
    "lattitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "CityName_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CityName_country_state_county_key" ON "CityName"("country", "state", "county");
