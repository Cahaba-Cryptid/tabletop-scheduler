import { Router } from 'express';
import { knexDB } from '../../db/queries';

let router = Router();

//Requests session details for sinlge posts (for displaying full detail), or for all posts (for home page where info is abridged).

router.get('/:id?', async (req, res) => {
    let id = req.params.id;
    try {
        if (id) {
            let [session] = await knexDB('Sessions').select().where('id', id);
            res.json(session);
        } else {
            let sessions = await knexDB('Sessions').select().orderBy('_created', 'desc');
        res.json(sessions);
        }
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

//Posts new sessions to db

router.post('/', async (req, res) => {
    try {
        let data = await knexDB('Sessions').insert(req.body);
        res.json(data);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}); 

//Updates session details

router.put('/:id', async (req, res) => {
    try {
        let id = req.body.id
        let details = req.body.details
        let editedSesh = await knexDB('Sessions').where('id', '=', id).update('details', details);
        res.json(editedSesh);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

//deletes session entirely

router.delete('/:id', async (req, res) => {
    try {
        let id = req.body.id
        let delSesh = await knexDB('Sessions').where('id', '=', id).del();
        res.json(delSesh);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})
export default router;

