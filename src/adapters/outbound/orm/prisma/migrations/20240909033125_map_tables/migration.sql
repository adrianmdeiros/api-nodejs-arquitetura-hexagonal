/*
  Warnings:

  - You are about to drop the `Console` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ConsoleAcessories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ConsoleUses` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Customer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Game` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `GamePlatform` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Platform` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Rental` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RentalItem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Console";

-- DropTable
DROP TABLE "ConsoleAcessories";

-- DropTable
DROP TABLE "ConsoleUses";

-- DropTable
DROP TABLE "Customer";

-- DropTable
DROP TABLE "Game";

-- DropTable
DROP TABLE "GamePlatform";

-- DropTable
DROP TABLE "Platform";

-- DropTable
DROP TABLE "Rental";

-- DropTable
DROP TABLE "RentalItem";

-- CreateTable
CREATE TABLE "rentals" (
    "id" BIGSERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "customerId" BIGINT NOT NULL,

    CONSTRAINT "rentals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customers" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "games" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "games_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "game-platforms" (
    "dailyPrice" DECIMAL(65,30) NOT NULL,
    "gameId" BIGINT NOT NULL,
    "platformId" BIGINT NOT NULL,

    CONSTRAINT "game-platforms_pkey" PRIMARY KEY ("gameId","platformId")
);

-- CreateTable
CREATE TABLE "console-uses" (
    "id" BIGSERIAL NOT NULL,
    "customerId" BIGINT,

    CONSTRAINT "console-uses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "consoles" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "pricePerHour" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "consoles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "platforms" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "platforms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rental-items" (
    "days" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "rentalId" BIGINT NOT NULL,
    "gameId" BIGINT NOT NULL,

    CONSTRAINT "rental-items_pkey" PRIMARY KEY ("gameId","rentalId")
);

-- CreateTable
CREATE TABLE "console-acessories" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "consoleId" BIGINT NOT NULL,

    CONSTRAINT "console-acessories_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "rentals_customerId_idx" ON "rentals"("customerId");

-- CreateIndex
CREATE UNIQUE INDEX "customers_email_key" ON "customers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "customers_phone_key" ON "customers"("phone");

-- CreateIndex
CREATE INDEX "game-platforms_gameId_idx" ON "game-platforms"("gameId");

-- CreateIndex
CREATE INDEX "game-platforms_platformId_idx" ON "game-platforms"("platformId");

-- CreateIndex
CREATE INDEX "console-uses_customerId_idx" ON "console-uses"("customerId");

-- CreateIndex
CREATE UNIQUE INDEX "platforms_name_key" ON "platforms"("name");

-- CreateIndex
CREATE INDEX "rental-items_rentalId_idx" ON "rental-items"("rentalId");

-- CreateIndex
CREATE INDEX "console-acessories_consoleId_idx" ON "console-acessories"("consoleId");
