import express from 'express';
import { helloTypescript } from './routes'

const app = express();

app.get('/', helloTypescript)

app.listen(3333);