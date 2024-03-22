-- CreateTable
CREATE TABLE "Origin" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "origin" TEXT NOT NULL,
    "formation" INTEGER NOT NULL,
    "dissolution" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
