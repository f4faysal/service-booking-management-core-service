/*
  Warnings:

  - You are about to drop the `reviews_and_ratings` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "reviews_and_ratings" DROP CONSTRAINT "reviews_and_ratings_servicesId_fkey";

-- DropForeignKey
ALTER TABLE "reviews_and_ratings" DROP CONSTRAINT "reviews_and_ratings_userId_fkey";

-- AlterTable
ALTER TABLE "services" ADD COLUMN     "reviews" TEXT[];

-- DropTable
DROP TABLE "reviews_and_ratings";
