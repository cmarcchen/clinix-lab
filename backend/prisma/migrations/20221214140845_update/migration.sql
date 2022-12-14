/*
  Warnings:

  - You are about to drop the column `sex` on the `Patient` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Patient" DROP COLUMN "sex",
ADD COLUMN     "address" TEXT,
ADD COLUMN     "gender" TEXT,
ADD COLUMN     "jobTitle" TEXT,
ADD COLUMN     "pictureUrl" TEXT;
