import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/AppError.js";
import { verifyAccessToken } from "../utils/Jwt.helper.js";
import { IJwtPayload } from "../types/index.js";

export const verifyUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.header("Authorization");

    const token = authHeader?.startsWith("Bearer ")
      ? authHeader.replace("Bearer ", "")
      : null;

    if (!token) {
      return next(new AppError("Unauthorized request", 401));
    }

    const decoded = verifyAccessToken(token) as IJwtPayload;

    req.user = {
      id: decoded.id,
      email: decoded.email,
      createdAt: decoded.createdAt,
      updatedAt: decoded.updatedAt,
    };

    next();
  } catch {
    next(new AppError("Invalid or expired token", 401));
  }
};
