import { NextResponse } from "next/server";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export async function GET() {
  const data = await prisma.user.findMany();

  return NextResponse.json(data);
}
