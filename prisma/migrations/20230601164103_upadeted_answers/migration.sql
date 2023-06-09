/*
  Warnings:

  - You are about to drop the column `answer` on the `Answers` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Answers" DROP COLUMN "answer",
ADD COLUMN     "answers" TEXT[];
