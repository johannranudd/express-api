-- CreateTable
CREATE TABLE "User" (
    "uuid" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "Listing" (
    "uuid" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "tags" TEXT[],
    "description" TEXT NOT NULL,
    "requirements" TEXT[],
    "deadline" TIMESTAMP(3) NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,
    "userUuid" TEXT,

    CONSTRAINT "Listing_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "Offer" (
    "uuid" TEXT NOT NULL,
    "userUuid" TEXT,

    CONSTRAINT "Offer_pkey" PRIMARY KEY ("uuid")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_uuid_key" ON "User"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Listing_uuid_key" ON "Listing"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Offer_uuid_key" ON "Offer"("uuid");

-- AddForeignKey
ALTER TABLE "Listing" ADD CONSTRAINT "Listing_userUuid_fkey" FOREIGN KEY ("userUuid") REFERENCES "User"("uuid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Offer" ADD CONSTRAINT "Offer_userUuid_fkey" FOREIGN KEY ("userUuid") REFERENCES "User"("uuid") ON DELETE SET NULL ON UPDATE CASCADE;
