/*
  Warnings:

  - You are about to drop the `CityName` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "CityName";

-- CreateTable
CREATE TABLE "County" (
    "id" SERIAL NOT NULL,
    "country" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "county" TEXT NOT NULL,
    "lattitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "County_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "County_country_state_county_key" ON "County"("country", "state", "county");
