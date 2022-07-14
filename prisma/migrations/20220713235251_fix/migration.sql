/*
  Warnings:

  - You are about to drop the column `quesiton` on the `questions` table. All the data in the column will be lost.
  - Added the required column `questionId` to the `answers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `question` to the `questions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "answers" ADD COLUMN     "questionId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "questions" DROP COLUMN "quesiton",
ADD COLUMN     "question" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "answers" ADD CONSTRAINT "answers_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "questions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
