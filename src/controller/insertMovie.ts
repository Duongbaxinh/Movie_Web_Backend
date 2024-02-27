import db from '../models'
const data = require('./data.json')
console.log('data', data)
const insertMovie = async (req: any, res: any) => {
    try {
        data.map(async (item: any) => {
            await db.Movie.create({ ...item })
        })
    } catch (error) {

    }
}