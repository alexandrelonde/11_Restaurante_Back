/*
  Warnings:

  - You are about to drop the `_PratoToRestaurante` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `preco` to the `prato` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_PratoToRestaurante" DROP CONSTRAINT "_PratoToRestaurante_A_fkey";

-- DropForeignKey
ALTER TABLE "_PratoToRestaurante" DROP CONSTRAINT "_PratoToRestaurante_B_fkey";

-- AlterTable
ALTER TABLE "prato" ADD COLUMN     "preco" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "restId" INTEGER;

-- DropTable
DROP TABLE "_PratoToRestaurante";

-- AddForeignKey
ALTER TABLE "prato" ADD CONSTRAINT "prato_restId_fkey" FOREIGN KEY ("restId") REFERENCES "restaurante"("id") ON DELETE SET NULL ON UPDATE CASCADE;
