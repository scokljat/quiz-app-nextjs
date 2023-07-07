import { NextResponse } from "next/server";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export async function GET() {
  const data = await prisma.user.findMany();

  data.sort(function (a, b) {
    return b.score - a.score;
  });

  return NextResponse.json(data);
}

export async function PUT(request) {
  try {
    const user = await request.json();

    const editedUser = await prisma.user.update({
      where: { id: user.id },
      data: { ...user },
    });

    return NextResponse.json(editedUser);
  } catch (error) {}
}
