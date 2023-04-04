-- CreateTable
CREATE TABLE "restaurante" (
    "id" SERIAL NOT NULL,
    "nome" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "nota" INTEGER NOT NULL,

    CONSTRAINT "restaurante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prato" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "prato_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PratoToRestaurante" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "restaurante_email_key" ON "restaurante"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_PratoToRestaurante_AB_unique" ON "_PratoToRestaurante"("A", "B");

-- CreateIndex
CREATE INDEX "_PratoToRestaurante_B_index" ON "_PratoToRestaurante"("B");

-- AddForeignKey
ALTER TABLE "_PratoToRestaurante" ADD CONSTRAINT "_PratoToRestaurante_A_fkey" FOREIGN KEY ("A") REFERENCES "prato"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PratoToRestaurante" ADD CONSTRAINT "_PratoToRestaurante_B_fkey" FOREIGN KEY ("B") REFERENCES "restaurante"("id") ON DELETE CASCADE ON UPDATE CASCADE;
