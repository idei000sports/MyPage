/*
  Warnings:

  - You are about to drop the column `city` on the `Origin` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Origin" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "county" TEXT NOT NULL,
    "formation" INTEGER NOT NULL,
    "dissolution" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Origin" ("country", "county", "createdAt", "dissolution", "formation", "id", "name", "state", "updatedAt") SELECT "country", "county", "createdAt", "dissolution", "formation", "id", "name", "state", "updatedAt" FROM "Origin";
DROP TABLE "Origin";
ALTER TABLE "new_Origin" RENAME TO "Origin";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
