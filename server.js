const express = require('express');
const superagent = require('superagent');
const cors = require('cors');
const port = 4000;
const url = 'https://jsonplaceholder.typicode.com/todos';
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const router = express.Router();
router.get('/todos', async (req, res) => {
    // console.log(req.headers['authorization']);
    const response = await superagent.get(url);
    return res.status(200).json(JSON.parse(response.text));
});
router.post('/todos', async (req, res) => {
    const id = req.params.id;
    const { userId, title, completed } = req.body;
    const response = await superagent.post(url).send({ userId, id, title, completed });
    return res.status(201).json(JSON.parse(response.text));
});
router.get('/todos/:id', async (req, res) => {
    const id = req.params.id;
    const response = await superagent.get(url + `/${id}`);
    return res.status(200).json(JSON.parse(response.text));
});
router.put('/todos/:id', async (req, res) => {
    const id = req.params.id;
    const { userId, title, completed } = req.body;
    const response = await superagent.put(url + `/${id}`).send({ userId, title, completed });
    return res.status(200).json(JSON.parse(response.text));
});
router.delete('/todos/:id', async (req, res) => {
    const id = req.params.id;
    const response = await superagent.delete(url + `/${id}`);
    if (response.status === 200) {
        return res.status(200).json({ message: 'Deleted successfully' });
    }
});
app.use(router);
app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
