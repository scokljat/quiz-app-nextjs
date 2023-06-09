import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export async function GET() {
  const data = await prisma.user.findMany();

  return NextResponse.json(data);
}

export async function POST(request) {
  try {
    const user = await request.json();

    const emailExist = await prisma.user.findUnique({
      where: { email: user.email },
    });

    if (emailExist)
      return NextResponse.json({ message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(user.password, 10);

    const args = {
      data: { ...user, password: hashedPassword },
    };

    const newUser = await prisma.user.create(args);

    return NextResponse.json(newUser);
  } catch (error) {}
}
