import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const user = await request.json();

    const registeredUser = await prisma.user.findUnique({
      where: { email: user.email },
    });

    if (!registeredUser)
      return NextResponse.json({ message: "Email is not found" });

    const validPassword = await bcrypt.compare(
      user.password,
      registeredUser.password
    );

    if (!validPassword)
      return NextResponse.json({ message: "Invalid password" });

    const token = jwt.sign({ id: registeredUser.id }, process.env.TOKEN_SECRET);

    return NextResponse.json({ token });
  } catch (error) {}
}
