import { NextResponse } from "next/server";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const startIndex = searchParams.get("start");
  const endIndex = searchParams.get("end");

  const allQuestions = await prisma.questions.findMany();
  const sectionedQuestions = allQuestions.slice(startIndex, endIndex);

  return NextResponse.json(sectionedQuestions);
}
