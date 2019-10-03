import * as path from 'path';
import * as express from 'express';
import apiRouter from './routes';
import authRouter from './routes/auth';
import * as passport from 'passport';
import * as cron from 'node-cron'; 
import { knexDB } from './db/queries';



import './middleware/localstrategy';
import './middleware/bearerstrategy';
import router from './routes/api/sessions';


const app = express();

let p = path.join(__dirname, '../public');

app.use(passport.initialize());
app.use(express.static(p));
app.use(express.json());
app.use('/api', apiRouter);
app.use('/auth', authRouter);

app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});