import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import db from "../models";
const { User } = db;
interface typeOfUser {
  name: string;
  gender: string;
  Brithday: string;
  Phone: string;
  email: string;
  password: string;
  address: string;
}
export const handleUser = {
  register: ({ password, email }: typeOfUser) =>
    new Promise(async (resolve: any, reject: any) => {
      try {
        const [user, create] = await User.findOrCreate({
          where: { email: email },
          defaults: { email: email, password: bcrypt.hashSync(password, 10) },
        });
        resolve({
          success: create ? true : false,
          message: create ? "your acount registed" : "acount existed",
        });
      } catch (error) {
        reject({
          error: error,
        });
      }
    }),
  login: ({ password, email }: { password: string; email: string }) =>
    new Promise(async (resolve: any, reject: any) => {
      try {
        const user = await User.findOne({ where: { email: email } });
        if (user) {
          const isChecked = bcrypt.compareSync(password, user.password);
          if (isChecked) {
            const { password, refreshToken, createdAt, updatedAt, ...rest } =
              user.dataValues;
            // const refreshTokens = Jwt.sign({ ...rest }, process.env.KEY_JWT!, {
            //   expiresIn: "2d",
            // });
            // await User.update(
            //   { refreshToken: refreshTokens },
            //   { where: { email: user.email } }
            // );
            resolve({
              message: "login successfull",
              success: true,
              user: rest,
              accessToken: await Jwt.sign({ ...rest }, process.env.KEY_JWT!, {
                expiresIn: "2h",
              }),
              //   refreshToken: refreshTokens,
            });
          }
          resolve({
            message: "login passowrd or usename incorect",
            success: false,
            user: null,
            accessToken: null,
          });
        } else {
          resolve({
            message: "account not exited",
            success: false,
            user: null,
            accessToken: null,
          });
        }
      } catch (error) {
        console.log(error);
        reject({
          message: false,
        });
      }
    }),
  logOut: (refreshToken: any) =>
    new Promise(async (resolve: any, reject: any) => {
      try {
        const up = await User.update(
          { refreshToken: null },
          { where: { refreshToken: refreshToken } }
        );
        console.log("dskjfsfsf", up);
        resolve({
          success: true,
          message: "you logouted",
        });
      } catch (error) {
        reject({
          success: false,
          message: "something went wrong",
        });
      }
    }),
  getUsers: async () => {
    try {
      const data = await db.User.findAll({});
      return {
        data: data,
      };
    } catch (error) {
      console.log(error);
      return {
        error,
      };
    }
  },
};
