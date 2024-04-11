-- CreateTable
CREATE TABLE "Words" (
    "id" SERIAL NOT NULL,
    "word" TEXT NOT NULL,
    "kana" TEXT NOT NULL,
    "boin" TEXT NOT NULL,
    "hinshi" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Words_pkey" PRIMARY KEY ("id")
);
