/*
  Warnings:

  - You are about to alter the column `lattitude` on the `City` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - You are about to alter the column `longitude` on the `City` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_City" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "country" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "lattitude" REAL NOT NULL,
    "longitude" REAL NOT NULL
);
INSERT INTO "new_City" ("city", "country", "id", "lattitude", "longitude", "state") SELECT "city", "country", "id", "lattitude", "longitude", "state" FROM "City";
DROP TABLE "City";
ALTER TABLE "new_City" RENAME TO "City";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
