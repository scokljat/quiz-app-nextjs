import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

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

    const token = jwt.sign({ id: newUser.id }, process.env.TOKEN_SECRET);

    return NextResponse.json({ token });
  } catch (error) {}
}
