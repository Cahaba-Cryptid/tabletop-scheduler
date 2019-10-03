import config from '../../config';
import * as knex from 'knex';

export const knexDB = knex(config.knex);

export default {
}