/*
  Warnings:

  - Added the required column `county` to the `Origin` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Origin" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "county" TEXT NOT NULL,
    "formation" INTEGER NOT NULL,
    "dissolution" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Origin" ("city", "country", "createdAt", "dissolution", "formation", "id", "name", "state", "updatedAt") SELECT "city", "country", "createdAt", "dissolution", "formation", "id", "name", "state", "updatedAt" FROM "Origin";
DROP TABLE "Origin";
ALTER TABLE "new_Origin" RENAME TO "Origin";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
