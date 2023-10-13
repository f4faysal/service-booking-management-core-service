/*
  Warnings:

  - Changed the type of `location` on the `services` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Location" AS ENUM ('Mirpur', 'Uttara', 'Gulshan', 'Banani', 'Dhanmondi', 'Mohammadpur', 'Motijheel', 'Khilgaon', 'Shyamoli', 'Farmgate', 'Mohakhali', 'Tejgaon', 'Rampura', 'Badda', 'Malibagh', 'Jatrabari', 'demra', 'Kadamtali', 'Keraniganj');

-- AlterTable
ALTER TABLE "services" DROP COLUMN "location",
ADD COLUMN     "location" "Location" NOT NULL;
