/*
  Warnings:

  - You are about to drop the column `Address` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `City` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `Landmark` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `State` on the `Address` table. All the data in the column will be lost.
  - Added the required column `address` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `landmark` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `Address` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Address" DROP COLUMN "Address",
DROP COLUMN "City",
DROP COLUMN "Landmark",
DROP COLUMN "State",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "landmark" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL;
