import { Router } from "express";
const route = Router()
import { conCtrComment, conTrollerSeri } from "../controller";
route.get('/comments/:movie_id', conCtrComment.getCommentByMovie)
route.get('/comments/seris/:seri_Id', conCtrComment.getCommentOfSeri)
route.post('/comments', conCtrComment.addComment)
route.delete('/comments/:id/:user_id', conCtrComment.delete)
export default route