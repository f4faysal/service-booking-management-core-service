/*
  Warnings:

  - You are about to drop the column `reviews` on the `services` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "services" DROP COLUMN "reviews";

-- CreateTable
CREATE TABLE "reviews_and_ratings" (
    "id" TEXT NOT NULL,
    "review" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "servicesId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "reviews_and_ratings_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "reviews_and_ratings" ADD CONSTRAINT "reviews_and_ratings_servicesId_fkey" FOREIGN KEY ("servicesId") REFERENCES "services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews_and_ratings" ADD CONSTRAINT "reviews_and_ratings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
