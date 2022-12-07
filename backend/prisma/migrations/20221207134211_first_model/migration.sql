/*
  Warnings:

  - Added the required column `email` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sex` to the `Patient` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Patient" ADD COLUMN     "age" INTEGER,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "sex" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Trial" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "product" TEXT,
    "formulation" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Trial_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PatientEvent" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT,
    "createdBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "patientId" TEXT NOT NULL,

    CONSTRAINT "PatientEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PatientToTrial" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PatientToTrial_AB_unique" ON "_PatientToTrial"("A", "B");

-- CreateIndex
CREATE INDEX "_PatientToTrial_B_index" ON "_PatientToTrial"("B");

-- AddForeignKey
ALTER TABLE "PatientEvent" ADD CONSTRAINT "PatientEvent_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PatientToTrial" ADD CONSTRAINT "_PatientToTrial_A_fkey" FOREIGN KEY ("A") REFERENCES "Patient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PatientToTrial" ADD CONSTRAINT "_PatientToTrial_B_fkey" FOREIGN KEY ("B") REFERENCES "Trial"("id") ON DELETE CASCADE ON UPDATE CASCADE;
