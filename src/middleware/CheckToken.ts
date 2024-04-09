import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const checkToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "unauthorized" });
  }

  const tokenVerify = token.replace("Bearer ", ""); // replace Bearer to ""

  try {
    jwt.verify(tokenVerify, process.env.JWT_SECRET!);
  } catch (error) {
    return res.status(401).json({ message: "unauthorized" });
  }

  next(); // suite de ma route
};

export default checkToken;
