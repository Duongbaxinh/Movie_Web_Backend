import { handleComment } from '../sevice'
import asyncHandler from 'express-async-handler'
export const conCtrComment = {
    getCommentByMovie: asyncHandler(async (req: any, res: any) => {
        const { movie_id } = req.params
        const { success, data } = await handleComment.getCommentOfMovie(movie_id)
        res.status(200).json({
            success,
            response: data
        })
    }),
    getCommentOfSeri: asyncHandler(async (req: any, res: any) => {
        const { seri_Id } = req.params
        const { success, response } = await handleComment.getCommentOFSeri(seri_Id)
        res.status(200).json({
            success,
            response
        })
    }),
    addComment: asyncHandler(async (req: any, res: any) => {
        console.log('data', req.body)
        const { success, response }: any = await handleComment.addComment(req.body)
        res.status(200).json({
            success,
            response
        })
    }),
    delete: asyncHandler(async (req: any, res: any) => {
        const { id, user_id } = req.params
        const { success, message }: any = await handleComment.deleteComment(id, user_id)
        res.status(200).json({
            success,
            message
        })
    })
}