import { handleUser } from "../sevice";
import asyncHandler from "express-async-handler";
export const controllerUser = {
  register: asyncHandler(async (req: any, res: any) => {
    const { message, success }: any = await handleUser.register(req.body);
    res.status(200).json({
      success,
      message,
    });
  }),
  login: asyncHandler(async (req: any, res: any) => {
    const { success, message, accessToken, user, refreshToken }: any =
      await handleUser.login(req.body);
    // res.cookie('refreshToken', '12345');
    // const co = req.cookies.refreshToken
    // console.log(co)
    res.status(200).json({
      success,
      message,
      user,
      accessToken,
    });
  }),
  logOut: asyncHandler(async (req: any, res: any) => {
    const cookieData = req.cookies;
    console.log("refreshToken", cookieData.refreshToken);
    if (cookieData && cookieData.refreshToken) {
      const { success, message }: any = await handleUser.logOut(
        cookieData.refreshToken
      );
      res.clearCookie("refreshToken", { httpOnly: true });
      res.status(200).json({
        success,
        message,
      });
    } else {
      res.status(200).json({
        success: false,
        message: "you haven't login",
      });
    }
  }),
  getUser: asyncHandler(async (req: any, res: any) => {
    const data = await handleUser.getUsers();
    res.status(200).json({
      data: data,
    });
  }),
};
