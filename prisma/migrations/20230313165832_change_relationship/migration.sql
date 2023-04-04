/*
  Warnings:

  - You are about to drop the column `restId` on the `prato` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "prato" DROP CONSTRAINT "prato_restId_fkey";

-- AlterTable
ALTER TABLE "prato" DROP COLUMN "restId",
ADD COLUMN     "restauranteId" INTEGER;

-- AddForeignKey
ALTER TABLE "prato" ADD CONSTRAINT "prato_restauranteId_fkey" FOREIGN KEY ("restauranteId") REFERENCES "restaurante"("id") ON DELETE SET NULL ON UPDATE CASCADE;
