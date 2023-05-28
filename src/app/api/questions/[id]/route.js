import { NextResponse } from "next/server";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export async function GET(req, { params }) {
  const { id } = params;

  const question = await prisma.questions.findUnique({
    where: { id: Number(id) },
  });

  return NextResponse.json(question);
}
