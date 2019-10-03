import * as express from 'express';
import sessionsRouter from './api/sessions';


const router = express.Router();

router.use('/sessions', sessionsRouter);



export default router;