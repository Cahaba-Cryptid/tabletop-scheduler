import { RequestHandler } from 'express';

//Checks to see if user is an admin, and therefore has the ability to delete and modify posts. Will most likely be changed as function of site moves away from sinlge moderator to user self moderation.

export const isAdmin: RequestHandler = (req, res, next) => {
    if(!req.user || req.user.role !== 'admin') {
        return  res.sendStatus(401);
    } else {
        return next();
    }
};

export default { isAdmin };

