/*
  Warnings:

  - You are about to drop the `review` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "review" DROP CONSTRAINT "review_userId_fkey";

-- DropTable
DROP TABLE "review";
