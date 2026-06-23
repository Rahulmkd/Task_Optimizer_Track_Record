import bcrypt from "bcrypt";
import crypto from "crypto";
import { Response } from "express";
import { NODE_ENV } from "../config/env.config.js";
import { prisma } from "../lib/prisma.js";

export const hashPassword = async (password: string): Promise<string> => {
  return bcrypt.hash(password, 10);
};

export const comparePassword = async (
  password: string,
  hashedPassword: string,
): Promise<boolean> => {
  return bcrypt.compare(password, hashedPassword);
};

export const hashRefreshToken = (refreshToken: string): string => {
  return crypto.createHash("sha256").update(refreshToken).digest("hex");
};

const isProduction = NODE_ENV === "production";

export const setCookies = (res: Response, refreshToken: string) => {
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "none" : "lax",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
};

export const destroyCookies = (res: Response) => {
  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: NODE_ENV === "production",
    sameSite: "lax",
  });
};

export const getUserById = async (userId: string) => {
  return prisma.user.findUnique({
    where: { id: userId },
    select: {
      name: true,
      email: true,
      phoneNumber: true,
    },
  });
};
