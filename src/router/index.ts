import { Application } from "express";
import movie from './movies';
import seri from './seri';
import user from './users';
import comment from "./comment";

const initRouter = (app: Application) => {
    app.use('/api/v1/', movie)
    app.use('/api/v1/', user)
    app.use('/api/v1/', seri)
    app.use('/api/v1/', comment)
    app.use((req: any, res: any) => res.sendStatus(404))

}

export default initRouter