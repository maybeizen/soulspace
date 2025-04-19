import jwt, { type Secret } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET! as Secret;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in .env");
}

export interface TokenPayload {
  userId: string;
  email: string;
  [key: string]: any;
}

export function signToken(
  payload: TokenPayload,
  expiresIn: string = JWT_EXPIRES_IN
): string {
  // @ts-expect-error
  return jwt.sign(payload, JWT_SECRET, { expiresIn });
}

export function verifyToken(token: string): TokenPayload {
  return jwt.verify(token, JWT_SECRET) as TokenPayload;
}
