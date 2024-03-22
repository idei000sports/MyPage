/*
  Warnings:

  - You are about to drop the column `origin` on the `Origin` table. All the data in the column will be lost.
  - Added the required column `city` to the `Origin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `Origin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `Origin` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Origin" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "formation" INTEGER NOT NULL,
    "dissolution" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Origin" ("createdAt", "dissolution", "formation", "id", "name", "updatedAt") SELECT "createdAt", "dissolution", "formation", "id", "name", "updatedAt" FROM "Origin";
DROP TABLE "Origin";
ALTER TABLE "new_Origin" RENAME TO "Origin";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
