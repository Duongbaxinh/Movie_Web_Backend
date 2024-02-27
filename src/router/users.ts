import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { Router } from "express";
import passport from "passport";
import { controllerUser } from '../controller';
const route = Router()
route.use(cookieParser())
route.use(bodyParser.json());
route.get('/users', controllerUser.getUser)
route.post('/users/register', controllerUser.register)
route.post('/users/login', controllerUser.login)
route.get('/users/logout', controllerUser.logOut)
route.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile'] }), (req: any, res: any) => {
    console.log('kdfjsk')
})
route.get('/auth/google/callback', passport.authenticate('google', { successRedirect: '/api/v1/sucessfull' }))
route.get('/sucessfull', (req: any, res: any) => {
    const user = { id: String, name: String, emails: String }
    user.id = req.user.id
    user.name = req.user.displayName
    user.emails = req.user.emails[0].value
    res.cookie('user', JSON.stringify(user))
    res.redirect('http://localhost:5173')
})
export default route