"use strict";
// MOVIE SERVICES
// import { Op } from "sequelize";
// import db from "../models";
// import { handleDeleteFile } from "../handle/handleDeleteFile";
// const { Movie, FileVideo, FileImage } = db;
// interface typeOfMovie {
//   id?: number;
//   name: string;
//   genre: string;
//   price: number;
//   release: number;
//   rating: number;
//   description: string;
//   author: string;
//   actor: string;
//   time: number;
//   avatar: string;
//   video: string;
//   fileName: any;
// }
// interface queryMovies {
//   name?: string;
//   limit?: string;
//   ofset?: string;
// }
// export const handleMovie = {
//   searchFilm: async ({ name, limit, ofset }: queryMovies) => {
//     try {
//       const queryOptions: any = { raw: true, nest: true };
//       const queryCondition: any = {};
//       if (name) queryCondition.mainName = { [Op.startsWith]: name };
//       limit ? (queryOptions.limit = +limit) : (queryOptions.limit = 5);
//       ofset ? (queryOptions.ofset = ofset) : (queryOptions.ofset = 1);
//       const { count, rows } = await Movie.findAndCountAll({
//         where: { ...queryCondition },
//         ...queryOptions,
//         attributes: {
//           exclude: ["createdAt", "updatedAt"],
//         },
//       });
//       return {
//         message: count,
//         data: rows,
//       };
//     } catch (error) {
//       return {
//         message: error,
//       };
//     }
//   },
//   getAllMovie: async () => {
//     try {
//       const data = await Movie.findAll({
//         // include: [
//         //   {
//         //     model: db.User,
//         //     attributes: ['email', 'avatar'],
//         //     through: { model: db.Comment, attributes: ['content'] },
//         //   },
//         // ],
//         // separate: true
//       });
//       return {
//         mressage: "sucessfull",
//         data: data,
//       };
//     } catch (error) {
//       console.log(error);
//       return {
//         mess: error,
//       };
//     }
//   },
//   getMovieById: async (id: number) => {
//     try {
//       const data = await Movie.findOne({
//         where: { id: id },
//         // include: [{
//         // model: db.FileImage, attributes: ['name']
//         // model: db.Country,
//         // attributes: ["name"],
//         // through: { attributes: [] },
//         // }, { model: db.FileVideo }],
//       });
//       return {
//         success: true,
//         data: data,
//       };
//     } catch (error) {
//       return {
//         message: "false",
//         error: error,
//       };
//     }
//   },
//   addMovie: async ({ fileName, ...data }: typeOfMovie, files: any) => {
//     try {
//       console.log(data);
//       const movie = await Movie.findOne({ where: { name: data.name } });
//       if (!movie && fileName) {
//         const newMovie = await Movie.create({ ...data });
//         for (let i in fileName[0]) {
//           const { type, typeOf, name } = fileName[0][i];
//           if (name && type === "video") {
//             await FileVideo.create({
//               movie_Id: newMovie.id,
//               video: fileName[0][i].name,
//               typeOf: typeOf,
//             });
//           }
//           if (name && type === "image") {
//             await FileImage.create({
//               movie_Id: newMovie.id,
//               image: name,
//               typeOf: typeOf,
//             });
//           }
//         }
//         return {
//           success: newMovie ? true : false,
//           message: newMovie ? "a movie created" : "movie had in database",
//         };
//       }
//       if (movie && fileName) {
//         for (let i in fileName[0]) {
//           const { type, name } = fileName[0][i];
//           if (name) {
//             handleDeleteFile(name, type);
//           }
//         }
//         return {
//           success: false,
//           message: "movie had in database",
//         };
//       }
//     } catch (error) {
//       if (error && fileName) {
//         for (let i in fileName[0]) {
//           const { type, name } = fileName[0][i];
//           if (name) {
//             handleDeleteFile(name, type);
//           }
//         }
//         return {
//           success: false,
//           message: error,
//         };
//       }
//     }
//   },
//   updateFilm: async ({ fileName, ...data }: typeOfMovie, id: string) => {
//     console.log(data);
//     /**const fileName = [{
//       video: { type: 'video', typeOf: 'video', name: '' },
//       avatar: { type: 'image', typeOf: 'avatar', name: '' },
//       trailler: { type: 'video', typeOf: 'trailler', name: '' }
//     }]*/
//     try {
//       const updeateMovie = await Movie.update(
//         { ...data },
//         { where: { id: id } }
//       );
//       if (updeateMovie && fileName) {
//         for (let i in fileName[0]) {
//           const { type, typeOf, name } = fileName[0][i];
//           if (name && type === "video") {
//             console.log("run at heare video");
//             const fileNameVideo = await FileVideo.findOne({
//               where: { movie_Id: id, typeOf: typeOf },
//             });
//             if (fileNameVideo) {
//               const updateMovie = await FileVideo.update(
//                 { video: name },
//                 { where: { id: fileNameVideo.id, typeOf: typeOf } }
//               );
//               if (updateMovie) {
//                 handleDeleteFile(fileNameVideo.video, type);
//               }
//             } else {
//               await FileVideo.create({
//                 movie_Id: id,
//                 video: name,
//                 typeOf: typeOf,
//               });
//             }
//           }
//           if (name && type === "image") {
//             const fileNameImage = await FileImage.findOne({
//               where: { movie_Id: id, typeOf: typeOf },
//             });
//             console.log("fileName Imag e", fileNameImage);
//             if (fileNameImage) {
//               const updateImage = FileImage.update(
//                 { image: name },
//                 { where: { id: fileNameImage.id, typeOf: typeOf } }
//               );
//               if (updateImage) {
//                 handleDeleteFile(fileNameImage.image, type);
//               }
//             } else {
//               console.log("run at heare,image ");
//               await FileImage.create({
//                 movie_Id: id,
//                 image: name,
//                 typeOf: typeOf,
//               });
//             }
//           }
//         }
//         return {
//           success: true,
//           message: "movie was updated",
//         };
//       }
//     } catch (error) {
//       return { message: error };
//     }
//   },
//   deleteMovie: async (id: number) => {
//     try {
//       const movie = await Movie.findOne({ where: { id: id } });
//       if (movie) {
//         await Movie.destroy({ where: { id: id } });
//         const [fileVideo, fileImage] = await Promise.all([
//           FileImage.findAll({ where: { movie_Id: id }, attributes: ["image"] }),
//           FileVideo.findAll({ where: { movie_Id: id }, attributes: ["video"] }),
//         ]);
//         await Promise.all([
//           FileImage.destroy({ where: { movie_Id: id } }),
//           FileVideo.destroy({ where: { movie_Id: id } }),
//         ]);
//         const fileAll = [...fileVideo, ...fileImage];
//         await Promise.all(
//           fileAll.map((item) => {
//             if (Object.values(item.dataValues)[0]) {
//               handleDeleteFile(
//                 Object.values(item.dataValues)[0],
//                 Object.keys(item.dataValues)[0]
//               );
//             }
//           })
//         );
//         return {
//           success: true,
//           message: "a movie was deleted",
//           data: fileAll,
//         };
//       }
//       return {
//         success: false,
//         message: "the movie is not in the database",
//       };
//     } catch (error) {
//       return {
//         success: false,
//         message: error,
//       };
//     }
//   },
// };
