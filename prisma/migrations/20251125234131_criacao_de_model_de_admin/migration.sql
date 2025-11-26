/*
  Warnings:

  - The primary key for the `_PedidoProdutos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[A,B]` on the table `_PedidoProdutos` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "_PedidoProdutos" DROP CONSTRAINT "_PedidoProdutos_AB_pkey";

-- CreateTable
CREATE TABLE "Admin" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_PedidoProdutos_AB_unique" ON "_PedidoProdutos"("A", "B");
