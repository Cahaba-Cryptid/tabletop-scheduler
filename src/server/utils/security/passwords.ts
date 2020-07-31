import * as bcrypt from 'bcrypt';
import { Hash } from 'crypto';

export const HashPassword = (password: string) => {
    const salt = bcrypt.genSaltSync(11);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
};

export const ComparePassword = (password: string, hash: string) => {
    return bcrypt.compareSync(password, hash);
};