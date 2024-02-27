import asyncHandler from "express-async-handler";
import Jwt from "jsonwebtoken";
export const verifyUser = asyncHandler(
  async (req: any, res: any, next: any) => {
    const authentication = await req.headers.authorization;
    if (authentication) {
      const token = await authentication.split(" ")[1];
      Jwt.verify(token, process.env.KEY_JWT!, (err: any, user: any) => {
        if (err instanceof Jwt.TokenExpiredError) {
          res.status(401).json({
            err: "token_expired",
          });
        }
        user
          ? next()
          : res.status(401).json({
              message: "token valide",
            });
      });
    } else {
      res.status(401).json({
        err: "Unauthentication",
      });
    }
  }
);
