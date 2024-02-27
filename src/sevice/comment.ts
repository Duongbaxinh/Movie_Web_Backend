import db from "../models";
interface dataType {
  MovieId: string;
  UserId: string;
  image: string;
  video: string;
}
export const handleComment = {
  getCommentOfMovie: async (id_Movie: string) => {
    try {
      const comments = await db.Comment.findAll({
        where: { MovieId: id_Movie },
        attributes: ["content"],
        include: [{ model: db.User, attributes: ["avatar", "email"] }],
        separate: true,
      });

      return {
        success: comments ? true : false,
        data: comments ? comments : null,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        err: error,
      };
    }
  },
  getCommentOFSeri: async (seri_id: string) => {
    console.log("seri id ", seri_id);
    try {
      const commentSeri = await db.Comment.findAll({
        where: { SeriId: seri_id },
        attributes: ["content"],
        include: [
          {
            model: db.User,
            attributes: ["avatar", "email"],
          },
        ],
      });
      return {
        success: commentSeri ? true : false,
        response: commentSeri ? commentSeri : null,
      };
    } catch (error) {
      return {
        success: false,
        response: error,
      };
    }
  },
  addComment: async (data: dataType) => {
    try {
      const newComment = await db.Comment.create({ ...data });
      return {
        success: newComment ? true : false,
        message: newComment ? "comment was added" : "something went wrong",
      };
    } catch (error) {
      return {
        success: false,
        err: error,
      };
    }
  },
  deleteComment: async (id: string, id_user: string) => {
    try {
      const commentDelete = await db.Comment.destroy({
        where: { id: id, UserId: id_user },
      });
      return {
        success: commentDelete ? true : false,
        message: commentDelete ? "comment was deleted" : "something went wrong",
      };
    } catch (error) {}
  },
};
