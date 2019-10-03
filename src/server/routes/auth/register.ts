import * as express from 'express';
import { knexDB } from '../../db/queries';
import { HashPassword } from '../../utils/security/passwords';
import { CreateToken } from '../../utils/security/tokens';

const router = express.Router();

//registers a new user by adding theirr info to db.

router.post('/', async (req, res, next) => {
    try {
        let data: any = await knexDB('Register_Requests').insert(req.body);
        res.json(data);
    } catch (error) {
        res.sendStatus(500);
    }
})

export default router;