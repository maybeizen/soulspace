import { Request, Response } from "express";
import { hashPassword, comparePasswords } from "../utils/hash";
import { signToken } from "../utils/jwt";
import { v4 as uuidv4 } from "uuid";
import User from "../models/User";

export async function register(req: Request, res: Response) {
  try {
    const { email, password, name } = req.body;

    const existing = await User.findOne({ email });
    if (existing)
      return res.status(409).json({ error: "Email already in use" });

    const hashedPassword = await hashPassword(password);

    const user = await User.create({
      userId: uuidv4(),
      email,
      password: hashedPassword,
      name,
    });

    const token = signToken({
      userId: user.userId,
      email: user.email,
    });

    res.status(201).json({
      user: {
        id: user.userId,
        email: user.email,
        name: user.name,
        profile: user.profile,
        settings: user.settings,
      },
      token,
    });
  } catch (error) {
    console.error(error);
    console.error(error.stack);
    res.status(500).json({ error: "Sign up failed" });
  }
}

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: "User not found." });

    const valid = await comparePasswords(password, user.password);
    if (!valid) return res.status(401).json({ error: "Invalid credentials" });

    const token = signToken({ userId: user.id, email: user.email });

    res.status(200).json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        profile: user.profile,
        settings: user.settings,
      },
      token,
    });
  } catch (error) {
    console.error(error);
    console.error(error.stack);
    res.status(500).json({ error: "Sign in failed" });
  }
}

export async function me(req: Request, res: Response) {
  try {
    const { userId } = (req as any).user;

    const user = await User.findOne({ userId }).select("-password");
    if (!user) return res.status(404).json({ error: "User not found" });

    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    console.error(error.stack);
    res.status(500).json({ error: "Failed to fetch user" });
  }
}
