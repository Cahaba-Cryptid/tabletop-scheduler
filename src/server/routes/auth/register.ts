import * as express from 'express';
import { knexDB } from '../../db/queries';
import { HashPassword } from '../../utils/security/passwords';
import { CreateToken } from '../../utils/security/tokens';

const router = express.Router();

// router.post('/', async (req, res, next) => {
//     try {
//         let user = req.body;
//         user.password = HashPassword(req.body.password);
//         let data = Object.values(user);
//         // let result: any = await DB.users.insertUser([user.email, user.name, user.password]);
//         let result: any = await knexDB('Users').insert([user.email, user.name, user.password]);
//         let token = await CreateToken({userid: result.insertId})
//         res.json({
//             token,
//             role: 'admin',
//             userid: result.insertId
//         });
//     } catch (error) {
//         res.sendStatus(500);
//     }
// });

router.post('/', async (req, res, next) => {
    try {
        let data: any = await knexDB('Register_Requests').insert(req.body);
        res.json(data);
    } catch (error) {
        res.sendStatus(500);
    }
})

export default router;