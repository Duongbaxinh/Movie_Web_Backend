import bodyParser from "body-parser";
import { Router } from "express";
import { ControllerMovie } from "../controller";
import { handleUploadFile } from "../middleweare/handleFileUpload";
import upload from "../middleweare/upload";
import { verifyUser } from "../middleweare/verifyUser";
const route = Router();

route.use(bodyParser.json());
route.get("/movies/:id", ControllerMovie.getMovieByPk);
route.get("/movies", ControllerMovie.getAllMovie);
route.get("/search", ControllerMovie.searchMovie);
route.post(
  "/movies",
  upload.fields([{ name: "avatar" }, { name: "video" }, { name: "trailler" }]),
  handleUploadFile,
  ControllerMovie.createMovie
);
route.put(
  "/movies/:id",
  //   [verifyUser],
  upload.fields([{ name: "avatar" }, { name: "video" }, { name: "trailler" }]),
  handleUploadFile,
  ControllerMovie.updateMovies
);
route.delete("/movies/:id", ControllerMovie.deleteMovie);
route.get("/inserts", ControllerMovie.insert);
export default route;
