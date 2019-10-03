import { RequestHandler } from 'express';

export const isAdmin: RequestHandler = (req, res, next) => {
    if(!req.user || req.user.role !== 'admin') {
        return  res.sendStatus(401);
    } else {
        return next();
    }
};

export default { isAdmin };

