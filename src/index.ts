import express from 'express';

const app = express();

app.get('/', (request, response) => {
    return response.json({message: 'Typescript'})
})

app.listen(3333);