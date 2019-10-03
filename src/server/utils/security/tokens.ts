import * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken';

import config from '../../config';

import { knexDB } from '../../db/queries';

//leave comments for all funtions
export const CreateToken = async (payload: IPayload) => {
    let [tokenid]: any = await knexDB('Tokens').insert({ userid: payload.userid });
    payload.accesstokenid = tokenid; 
    payload.unique = crypto.randomBytes(32).toString('hex');
    let token = await jwt.sign(payload, config.auth.secret);
    await knexDB('Tokens').update('token', token).where('id', payload.accesstokenid);
    return token;
};

export const ValidToken = async (token: string) => {
    let payload: IPayload = <IPayload>jwt.decode(token);
    let accesstokenid = await knexDB('Tokens').where({ id: payload.accesstokenid, token });
    if(!accesstokenid) {
        throw new Error('Invalid Token!');
    } else {
        return payload;
    }
};

export interface IPayload {
    [key: string]: any;
    userid: number;
    unique?: string;
}

