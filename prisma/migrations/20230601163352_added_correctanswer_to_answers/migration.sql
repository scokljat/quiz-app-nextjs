/*
  Warnings:

  - You are about to drop the column `correctAnswer` on the `Questions` table. All the data in the column will be lost.
  - Added the required column `correctAnswer` to the `Answers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Answers" ADD COLUMN     "correctAnswer" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Questions" DROP COLUMN "correctAnswer";
