/*
  Warnings:

  - Added the required column `county` to the `City` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_City" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "country" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "county" TEXT NOT NULL,
    "lattitude" REAL NOT NULL,
    "longitude" REAL NOT NULL
);
INSERT INTO "new_City" ("city", "country", "id", "lattitude", "longitude", "state") SELECT "city", "country", "id", "lattitude", "longitude", "state" FROM "City";
DROP TABLE "City";
ALTER TABLE "new_City" RENAME TO "City";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
