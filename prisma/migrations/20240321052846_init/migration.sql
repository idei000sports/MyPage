/*
  Warnings:

  - You are about to drop the column `city` on the `City` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_City" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "country" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "county" TEXT NOT NULL,
    "lattitude" REAL NOT NULL,
    "longitude" REAL NOT NULL
);
INSERT INTO "new_City" ("country", "county", "id", "lattitude", "longitude", "state") SELECT "country", "county", "id", "lattitude", "longitude", "state" FROM "City";
DROP TABLE "City";
ALTER TABLE "new_City" RENAME TO "City";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
