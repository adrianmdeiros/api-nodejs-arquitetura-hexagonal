-- CreateTable
CREATE TABLE "Rental" (
    "id" BIGSERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "customerId" BIGINT NOT NULL,

    CONSTRAINT "Rental_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Customer" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Game" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GamePlatform" (
    "dailyPrice" DECIMAL(65,30) NOT NULL,
    "gameId" BIGINT NOT NULL,
    "platformId" BIGINT NOT NULL,

    CONSTRAINT "GamePlatform_pkey" PRIMARY KEY ("gameId","platformId")
);

-- CreateTable
CREATE TABLE "ConsoleUses" (
    "id" BIGSERIAL NOT NULL,
    "customerId" BIGINT,

    CONSTRAINT "ConsoleUses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Console" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "pricePerHour" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Console_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Platform" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Platform_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RentalItem" (
    "days" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "rentalId" BIGINT NOT NULL,
    "gameId" BIGINT NOT NULL,

    CONSTRAINT "RentalItem_pkey" PRIMARY KEY ("gameId","rentalId")
);

-- CreateTable
CREATE TABLE "ConsoleAcessories" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "consoleId" BIGINT NOT NULL,

    CONSTRAINT "ConsoleAcessories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_GameToPlatform" (
    "A" BIGINT NOT NULL,
    "B" BIGINT NOT NULL
);

-- CreateIndex
CREATE INDEX "Rental_customerId_idx" ON "Rental"("customerId");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_email_key" ON "Customer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_phone_key" ON "Customer"("phone");

-- CreateIndex
CREATE INDEX "GamePlatform_gameId_idx" ON "GamePlatform"("gameId");

-- CreateIndex
CREATE INDEX "GamePlatform_platformId_idx" ON "GamePlatform"("platformId");

-- CreateIndex
CREATE INDEX "ConsoleUses_customerId_idx" ON "ConsoleUses"("customerId");

-- CreateIndex
CREATE UNIQUE INDEX "Platform_name_key" ON "Platform"("name");

-- CreateIndex
CREATE INDEX "RentalItem_rentalId_idx" ON "RentalItem"("rentalId");

-- CreateIndex
CREATE INDEX "ConsoleAcessories_consoleId_idx" ON "ConsoleAcessories"("consoleId");

-- CreateIndex
CREATE UNIQUE INDEX "_GameToPlatform_AB_unique" ON "_GameToPlatform"("A", "B");

-- CreateIndex
CREATE INDEX "_GameToPlatform_B_index" ON "_GameToPlatform"("B");
